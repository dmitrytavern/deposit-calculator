import { Input } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import {
  transformNumberToPretty,
  transformPrettyNumber,
} from '../utilities/transformation'

export const CalculatorInputReplenishment = observer(
  function CalculatorInputReplenishment() {
    const { store } = useCalculator()

    const replenishment = store.getField('replenishment')

    return (
      <Input
        size="sm"
        variant="bordered"
        type="text"
        label="Сума поповнення"
        inputMode="decimal"
        className="ml-7 w-auto"
        min={1}
        max={Number.MAX_SAFE_INTEGER}
        isInvalid={replenishment.error}
        errorMessage={replenishment.errorMessage}
        value={transformNumberToPretty(replenishment.value)}
        onValueChange={(value) =>
          replenishment.onChange(transformPrettyNumber(value))
        }
      />
    )
  },
)
