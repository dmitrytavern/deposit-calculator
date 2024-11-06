import { Input } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import {
  transformNumberToPretty,
  transformPrettyNumber,
} from '../utilities/transformation'

export const CalculatorInputAmount = observer(function CalculatorInputAmount() {
  const { store } = useCalculator()

  const amount = store.getField('amount')

  return (
    <Input
      size="sm"
      variant="bordered"
      type="text"
      label="Сума депозиту"
      inputMode="decimal"
      min={1}
      max={Number.MAX_SAFE_INTEGER}
      isRequired
      isInvalid={amount.error}
      errorMessage={amount.errorMessage}
      value={transformNumberToPretty(amount.value)}
      onValueChange={(value) => amount.onChange(transformPrettyNumber(value))}
    />
  )
})
