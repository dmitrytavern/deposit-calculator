import { Input } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { transformZeroToEmpty } from '../utilities/transformation'

export const CalculatorInputPeriod = observer(function CalculatorInputPeriod() {
  const { store } = useCalculator()

  const period = store.getField('period')

  return (
    <Input
      size="sm"
      variant="bordered"
      type="number"
      label="Термін"
      inputMode="decimal"
      min={1}
      max={120}
      isRequired
      isInvalid={period.error}
      errorMessage={period.errorMessage}
      value={transformZeroToEmpty(period.value)}
      onValueChange={(value) => period.onChange(+value)}
    />
  )
})
