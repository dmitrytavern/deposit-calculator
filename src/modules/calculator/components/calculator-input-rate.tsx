import { Input } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { transformZeroToEmpty } from '../utilities/transformation'

export const CalculatorInputRate = observer(function CalculatorInputRate() {
  const { store } = useCalculator()

  const rate = store.getField('rate')

  return (
    <Input
      size="sm"
      variant="bordered"
      type="number"
      label="Відсоткова ставка"
      inputMode="decimal"
      min={0.01}
      max={100}
      isRequired
      isInvalid={rate.error}
      errorMessage={rate.errorMessage}
      value={transformZeroToEmpty(rate.value)}
      onValueChange={(value) => rate.onChange(+value)}
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">%</span>
        </div>
      }
    />
  )
})
