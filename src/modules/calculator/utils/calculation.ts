import { isLeapYear } from '@/uitls/date'

import { Calculation, FormResult, FormSchema } from '../types'

const calculatePeriod = (form: Readonly<FormSchema>, monthIndex: number) => {
  const initialYear = form.date.getFullYear()
  const initialMonth = form.date.getMonth() + 1
  const initialDay = form.date.getDate()
  const currentDate = new Date(initialYear, initialMonth + monthIndex, 0)

  const maxDate = currentDate.getDate()
  const date = initialDay > maxDate ? maxDate : initialDay

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1

  let startWorkDay = 1
  let endWorkDay = maxDate

  if (monthIndex === 0) startWorkDay = date + 1
  if (monthIndex === 0 && date === maxDate) return

  if (monthIndex === form.period) endWorkDay = date - 1
  if (monthIndex === form.period && date === 1) return

  const workDays = endWorkDay - startWorkDay + 1

  return { year, month, workDays, startWorkDay, endWorkDay }
}

const calculateInvestment = (
  form: Readonly<FormSchema>,
  monthIndex: number,
) => {
  return monthIndex !== 0 && form.replenishmentIsActive ? form.replenishment : 0
}

const calculateBalance = (
  form: Readonly<FormSchema>,
  investment: number,
  previosCalculation: Calculation | undefined,
) => {
  let balance: number = previosCalculation
    ? previosCalculation.balance
    : form.amount

  if (form.replenishmentIsActive) balance += investment

  if (form.capitalizationIsActive)
    balance += previosCalculation ? previosCalculation.income : 0

  if (form.capitalizationIsActive && form.taxIsActive)
    balance -= previosCalculation ? previosCalculation.tax : 0

  return balance
}

const calculateRate = (form: Readonly<FormSchema>) => {
  return form.rate
}

const calculateTaxRate = (form: Readonly<FormSchema>) => {
  return form.taxIsActive ? form.rate * (form.tax / 100) : 0
}

const calculateIncomePerDay = (year: number, rate: number, balance: number) => {
  return (balance * (rate / 100)) / (isLeapYear(year) ? 366 : 365)
}

export function calculate(form: Readonly<FormSchema>): FormResult {
  const calculations: Calculation[] = []

  const rate = calculateRate(form)
  const taxRate = calculateTaxRate(form)
  let totalTaxAmount = 0
  let totalPercentAmount = 0
  let totalInvestedAmount = form.amount

  for (let monthIndex = 0; monthIndex <= form.period; monthIndex++) {
    const period = calculatePeriod(form, monthIndex)

    if (!period) continue

    const investment = calculateInvestment(form, monthIndex)

    const balance = calculateBalance(
      form,
      investment,
      calculations[calculations.length - 1],
    )

    const incomePerDay = calculateIncomePerDay(period.year, rate, balance)

    const income = incomePerDay * period.workDays

    const taxPerDay = calculateIncomePerDay(period.year, taxRate, balance)

    const tax = taxPerDay * period.workDays

    calculations.push({ ...period, balance, income, tax, investment })

    totalTaxAmount += tax
    totalPercentAmount += income
    totalInvestedAmount += investment
  }

  const rateAfterTax = rate - taxRate
  const totalAmount = totalInvestedAmount + totalPercentAmount - totalTaxAmount

  return {
    rate,
    rateAfterTax,
    totalAmount,
    totalTaxAmount,
    totalPercentAmount,
    totalInvestedAmount,
  }
}
