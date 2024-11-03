export const isLeapYear = (year: number) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

export const daysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}
