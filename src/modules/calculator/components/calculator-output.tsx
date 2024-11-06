import { Divider, Spacer } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { CalculatorOutputSkeleton } from './calculator-output-skeleton'
import { CalculatorOutputSubtitle } from './calculator-output-subtitle'
import { CalculatorOutputSubtitleAmount } from './calculator-output-subtitle-amount'
import { CalculatorOutputSubtitlePercent } from './calculator-output-subtitle-percent'
import { CalculatorOutputTitle } from './calculator-output-title'

export const CalculatorOutput = observer(function CalculatorOutput() {
  const { store } = useCalculator()

  if (!store.result) return <CalculatorOutputSkeleton />

  return (
    <div className="w-full">
      <CalculatorOutputTitle value={store.result.totalAmount} />

      <Spacer y={4} />

      <Divider />

      <Spacer y={4} />

      <CalculatorOutputSubtitle title="Вкладено" />
      <CalculatorOutputSubtitleAmount
        value={store.result.totalInvestedAmount}
      />

      <Spacer y={3} />

      <CalculatorOutputSubtitle title="Відсотки" />
      <CalculatorOutputSubtitleAmount value={store.result.totalPercentAmount} />

      <Spacer y={3} />

      <CalculatorOutputSubtitle title="Ставка" />
      <CalculatorOutputSubtitlePercent value={store.result.rate} />

      {store.form.taxIsActive && (
        <>
          <Spacer y={3} />

          <CalculatorOutputSubtitle title="Ставка після сплати податків" />
          <CalculatorOutputSubtitlePercent value={store.result.rateAfterTax} />

          <Spacer y={3} />

          <CalculatorOutputSubtitle title="Сплачено податку" />
          <CalculatorOutputSubtitleAmount value={store.result.totalTaxAmount} />
        </>
      )}
    </div>
  )
})
