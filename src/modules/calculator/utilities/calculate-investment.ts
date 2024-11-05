import { FormSchema } from '../types'

/**
 * Calculate replenishment amount for current calculation.
 *
 * If month index equals 0 - replenishment is 0.
 *
 * @param form input data
 * @param monthIndex month index
 * @returns replenishment amount
 */
export const calculateInvestment = (
  form: Readonly<FormSchema>,
  monthIndex: number,
) => {
  return monthIndex !== 0 && form.replenishmentIsActive ? form.replenishment : 0
}
