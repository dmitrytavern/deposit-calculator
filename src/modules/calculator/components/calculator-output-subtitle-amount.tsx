import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { transformNumberToPretty } from '../utilities/transformation'

export interface CalculatorOutputSubtitleAmount {
  value: number
}

export const CalculatorOutputSubtitleAmount = observer(
  function CalculatorOutputSubtitleAmount({
    value,
  }: CalculatorOutputSubtitleAmount) {
    const { store } = useCalculator()

    return (
      <div>
        <span className="text-2xl font-semibold tracking-wide">
          {transformNumberToPretty(value)}
        </span>
        <span className="text-lg font-semibold">{store.currencySymbol}</span>
      </div>
    )
  },
)
