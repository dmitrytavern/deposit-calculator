import { Spacer } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { transformNumberToPretty } from '../utilities/transformation'

export interface CalculatorOutputTitleProps {
  value: number
}

export const CalculatorOutputTitle = observer(function CalculatorOutputTitle({
  value,
}: CalculatorOutputTitleProps) {
  const { store } = useCalculator()

  return (
    <div>
      <span className="block text-lg text-zinc-800 font-semibold">
        Ви отримаєте
      </span>

      <Spacer y={2} />

      <div className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        <span className="text-5xl font-extrabold tracking-wide">
          {transformNumberToPretty(value)}
        </span>
        <span className="text-3xl font-extrabold">{store.currencySymbol}</span>
      </div>
    </div>
  )
})
