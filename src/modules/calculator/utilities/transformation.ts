/**
 * Tranform number zero to empty.
 *
 * 0 -> ''
 * @returns texted number or empty
 */
export const transformZeroToEmpty = (number: number) => {
  return number === 0 ? '' : `${number}`
}

/**
 * Round value to 2 decemal places.
 *
 * @param number value
 * @returns rounded value to 2 decemal places
 */
export const transformNumberToRounded = (number: number) => {
  return +number.toFixed(2)
}

/**
 * Transform number to pretty view.
 *
 * 10000.50 -> 10 000.5
 * 1000000.67 -> 1 000 000.67
 * etc.
 *
 * @param number value
 * @returns pretty value for input
 */
export const transformNumberToPretty = (number: number) => {
  const rounded = transformNumberToRounded(number)
  const zeroed = transformZeroToEmpty(rounded)
  const replaced = zeroed.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return replaced
}

/**
 * Tranform pretty number to number.
 *
 * '' -> 0
 * 10 000 -> 10000
 * 1 000 000 -> 1000000
 * etc.
 *
 * @param number pretty value
 * @returns numberic value
 */
export const transformPrettyNumber = (number: string) => {
  const formatedNumber = number.replace(/ /g, '')
  const parsedFloat = parseFloat(formatedNumber)

  return Number.isNaN(parsedFloat) ? 0 : parsedFloat
}
