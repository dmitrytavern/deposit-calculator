import { Input } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { transformZeroToEmpty } from '../utilities/transformation'

export const CalculatorInputTaxRate = observer(
  function CalculatorInputTaxRate() {
    const { store } = useCalculator()

    const tax = store.getField('tax')

    return (
      <Input
        size="sm"
        variant="bordered"
        type="number"
        label="Відсоток податків"
        inputMode="decimal"
        className="ml-7 w-auto"
        min={0.01}
        max={100}
        isInvalid={tax.error}
        errorMessage={tax.errorMessage}
        value={transformZeroToEmpty(tax.value)}
        onValueChange={(value) => tax.onChange(+value)}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">%</span>
          </div>
        }
      />
    )
  },
)
