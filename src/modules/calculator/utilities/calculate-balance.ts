import { Calculation, FormSchema } from '../types'

/**
 * Calculate balance for current period uses previous balance
 * and deposit options. If previous balance not exists, uses
 * deposit amount as base balance.
 *
 * Add previous income if capitalization is turn on.
 *
 * Add replenishment amount if replenishment is turn on.
 *
 * Subtract previous tax if tax is turn on.
 *
 * @param form input data
 * @param investment refill amount
 * @param previosCalculation previos calculation
 * @returns balance for current calculation
 */
export const calculateBalance = (
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
