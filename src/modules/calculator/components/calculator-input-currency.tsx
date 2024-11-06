import { Select, SelectItem } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'

export const CalculatorInputCurrency = observer(
  function CalculatorInputCurrency() {
    const { store } = useCalculator()

    const currency = store.getField('currency')

    return (
      <Select
        size="sm"
        variant="bordered"
        label="Валюта"
        className="max-w-28"
        isInvalid={currency.error}
        errorMessage={currency.errorMessage}
        selectedKeys={[currency.value]}
        onChange={(e) => currency.onChange(e.target.value)}
      >
        {store.currencies.map((value) => (
          <SelectItem key={value[0]}>{value[0]}</SelectItem>
        ))}
      </Select>
    )
  },
)
