import { FormSchema } from '../types'

/**
 * Calcluate tax rate.
 *
 * @param form input data
 * @returns tax rate
 */
export const calculateTaxRate = (form: Readonly<FormSchema>) => {
  return form.taxIsActive ? form.rate * (form.tax / 100) : 0
}
