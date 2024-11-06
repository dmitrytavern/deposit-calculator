import { transformNumberToPretty } from '../utilities/transformation'

export interface CalculatorOutputSubtitlePercent {
  value: number
}

export const CalculatorOutputSubtitlePercent = ({
  value,
}: CalculatorOutputSubtitlePercent) => {
  return (
    <div>
      <span className="text-2xl font-semibold tracking-wide">
        {transformNumberToPretty(value)}%
      </span>
    </div>
  )
}
