const isLeapYear = (year: number) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

/**
 * Calculate income per day.
 *
 * @param year year of calculation
 * @param rate rate
 * @param balance balance of calculation
 * @returns income per day
 */
export const calculateIncomePerDay = (
  year: number,
  rate: number,
  balance: number,
) => {
  return (balance * (rate / 100)) / (isLeapYear(year) ? 366 : 365)
}
