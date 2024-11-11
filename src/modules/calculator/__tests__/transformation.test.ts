import {
  transformNumberToPretty,
  transformNumberToRounded,
  transformPrettyNumber,
  transformZeroToEmpty,
} from '../utilities/transformation'

describe('Transformation of numbers', () => {
  describe('Zero to empty', () => {
    it('should return string number', () => {
      expect(transformZeroToEmpty(1)).toBe('1')
    })

    it('should return empty string', () => {
      expect(transformZeroToEmpty(0)).toBe('')
    })
  })

  describe('Number to rounded', () => {
    it('should return rounded number', () => {
      expect(transformNumberToRounded(1.09777)).toBe(1.1)
    })

    it('should return number without zeros', () => {
      // prettier-ignore
      expect(transformNumberToRounded(1.5000)).toBe(1.5)
    })
  })

  describe('Number to pretty', () => {
    it.each([
      [100, '100'],
      [1000, '1 000'],
      [100000, '100 000'],
      [1000000, '1 000 000'],
      [1000000.1, '1 000 000.1'],
      [1000000.15, '1 000 000.15'],
      [1000000.159, '1 000 000.16'],
    ])('should transform "%i" to "%s" ', (a, expected) => {
      expect(transformNumberToPretty(a)).toBe(expected)
    })
  })

  describe('Pretty number to number', () => {
    it.each([
      ['100', 100],
      ['1 000', 1000],
      ['100 000', 100000],
      ['1 000 000', 1000000],
      ['1 000 000.1', 1000000.1],
      ['1 000 000.15', 1000000.15],
    ])('should transform "%s" to "%i" ', (a, expected) => {
      expect(transformPrettyNumber(a)).toBe(expected)
    })
  })
})
