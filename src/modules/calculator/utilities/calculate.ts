import { Calculation, FormResult, FormSchema } from '../types'
import { calculateBalance } from './calculate-balance'
import { calculateIncomePerDay } from './calculate-income-per-day'
import { calculateInvestment } from './calculate-investment'
import { calculatePeriod } from './calculate-period'
import { calculateRate } from './calculate-rate'
import { calculateTaxRate } from './calculate-tax-rate'

/**
 * Generate calcualtions.
 *
 * @param form input data
 * @returns calculations
 */
function generateCalculations(form: Readonly<FormSchema>) {
  const calculations: Calculation[] = []

  const rate = calculateRate(form)
  const taxRate = calculateTaxRate(form)

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
  }

  return calculations
}

/**
 * Generate pretty raport.
 *
 * @param form input data
 * @param calculations all calculations
 * @returns pretty raport
 */
function generateTotal(
  form: Readonly<FormSchema>,
  calculations: Calculation[],
) {
  const rate = calculateRate(form)
  const taxRate = calculateTaxRate(form)
  const rateAfterTax = rate - taxRate

  let totalAmount = 0
  let totalTaxAmount = 0
  let totalPercentAmount = 0
  let totalInvestedAmount = form.amount

  for (const calculation of calculations) {
    totalTaxAmount += calculation.tax
    totalPercentAmount += calculation.income
    totalInvestedAmount += calculation.investment
  }

  totalAmount = totalInvestedAmount + totalPercentAmount - totalTaxAmount

  return {
    rate,
    rateAfterTax,
    totalAmount,
    totalTaxAmount,
    totalPercentAmount,
    totalInvestedAmount,
  }
}

/**
 * Calculate a deposit by input data.
 *
 * @param form input data
 * @returns result of calculation
 */
export function calculate(form: Readonly<FormSchema>): FormResult {
  const calculations = generateCalculations(form)
  const total = generateTotal(form, calculations)

  return total
}
