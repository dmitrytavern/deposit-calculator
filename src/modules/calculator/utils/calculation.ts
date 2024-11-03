import { z } from 'zod'

import { daysInMonth, isLeapYear } from '@/uitls/date'

import { formSchema } from '../schemas'

type StateSchema = z.infer<typeof formSchema>

type Period = {
  year: number
  month: number
  startDate: number
  endDate: number
  days: number
}

type Calculation = {
  invested: number
  balance: number
  income: number
  tax: number
}

function calculatePeriods(form: Readonly<StateSchema>): Period[] {
  const periods = []
  const formDateYear = form.date.getFullYear()
  const formDateMonth = form.date.getMonth()
  const formDateDays = form.date.getDate()

  for (let i = 0; i <= form.period; i++) {
    const maxDays = daysInMonth(formDateYear, formDateMonth + 1 + i)

    const currentDate = new Date(
      formDateYear,
      formDateMonth + i,
      formDateDays > maxDays ? maxDays : formDateDays,
    )

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const date = currentDate.getDate()

    let startDate = 1
    let endDate = maxDays

    if (i === 0 && date === maxDays) continue
    if (i === form.period && date === 1) continue

    if (i === 0) startDate = date + 1
    if (i === form.period) endDate = date - 1

    const days = endDate - startDate + 1

    periods.push({
      year,
      month,
      startDate,
      endDate,
      days,
    })
  }

  return periods
}

function calculateDeposit(
  form: Readonly<StateSchema>,
  periods: Period[],
): Calculation[] {
  const calculations: Calculation[] = []

  for (const period of periods) {
    const invested: number =
      calculations.length && form.replenishmentIsActive ? form.replenishment : 0

    let balance: number = calculations.length
      ? calculations[calculations.length - 1].balance
      : form.amount

    if (calculations.length && form.capitalizationIsActive)
      balance += calculations[calculations.length - 1].income

    if (calculations.length && form.capitalizationIsActive && form.taxIsActive)
      balance -= calculations[calculations.length - 1].tax

    if (calculations.length && form.replenishmentIsActive) balance += invested

    const rate = form.rate

    const incomePerDay =
      (balance * (rate / 100)) / (isLeapYear(period.year) ? 366 : 365)

    const income = incomePerDay * period.days

    let tax = 0

    if (form.taxIsActive) {
      const taxPerDay =
        (balance * ((rate * (form.tax / 100)) / 100)) /
        (isLeapYear(period.year) ? 366 : 365)

      tax = taxPerDay * period.days
    }

    calculations.push({
      invested,
      balance,
      income,
      tax,
    })
  }

  return calculations
}

export function calculate(form: Readonly<StateSchema>) {
  const periods = calculatePeriods(form)
  const calculations = calculateDeposit(form, periods)

  let investedAmount = form.amount
  let totalAmount = 0
  let taxAmount = 0
  const rate = form.rate
  const rateAfterTax = form.taxIsActive
    ? form.rate - form.rate * (form.tax / 100)
    : 0

  for (const calculation of calculations) {
    taxAmount += calculation.tax
    totalAmount += calculation.income
    investedAmount += calculation.invested
  }

  return {
    rate,
    rateAfterTax,
    investedAmount,
    totalAmount,
    taxAmount,
    calculations,
    periods,
  }
}
