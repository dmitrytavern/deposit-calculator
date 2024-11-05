import { FormSchema } from '../types'

/**
 * Calculate period by month index and date of options.
 *
 * If returns undefined - period not exists.
 *
 * @param form input data
 * @param monthIndex month index
 * @returns period of current calculation or undefined
 */
export const calculatePeriod = (
  form: Readonly<FormSchema>,
  monthIndex: number,
) => {
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
