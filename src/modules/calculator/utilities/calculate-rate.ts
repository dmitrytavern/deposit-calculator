import { FormSchema } from '../types'

/**
 * Calcluate rate.
 *
 * @param form input data
 * @returns rate
 */
export const calculateRate = (form: Readonly<FormSchema>) => {
  return form.rate
}
