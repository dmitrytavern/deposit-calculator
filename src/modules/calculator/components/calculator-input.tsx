import { Checkbox, Spacer } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { CalculatorInputAmount } from './calculator-input-amount'
import { CalculatorInputCurrency } from './calculator-input-currency'
import { CalculatorInputDatePicker } from './calculator-input-date-picker'
import { CalculatorInputPeriod } from './calculator-input-period'
import { CalculatorInputRate } from './calculator-input-rate'
import { CalculatorInputReplenishment } from './calculator-input-replenishment'
import { CalculatorInputTaxRate } from './calculator-input-tax-rate'

export const CalculatorInput = observer(function CalculatorInput() {
  const { store } = useCalculator()

  const taxIsActive = store.getField('taxIsActive')
  const replenishmentIsActive = store.getField('replenishmentIsActive')
  const capitalizationIsActive = store.getField('capitalizationIsActive')

  return (
    <div className="w-full">
      <div className="flex">
        <CalculatorInputAmount />

        <Spacer x={4} />

        <CalculatorInputCurrency />
      </div>

      <Spacer y={4} />

      <CalculatorInputRate />

      <Spacer y={4} />

      <CalculatorInputPeriod />

      <Spacer y={4} />

      <CalculatorInputDatePicker />

      <Spacer y={4} />

      <Checkbox
        isInvalid={capitalizationIsActive.error}
        isSelected={capitalizationIsActive.value}
        onValueChange={(value) => capitalizationIsActive.onChange(value)}
      >
        Додавання % до депозиту
      </Checkbox>

      <Spacer y={4} />

      <Checkbox
        isInvalid={replenishmentIsActive.error}
        isSelected={replenishmentIsActive.value}
        onValueChange={(value) => replenishmentIsActive.onChange(value)}
      >
        Щомісячне поповнення
      </Checkbox>

      {replenishmentIsActive.value && (
        <>
          <Spacer y={2} />
          <CalculatorInputReplenishment />
        </>
      )}

      <Spacer y={4} />

      <Checkbox
        isInvalid={taxIsActive.error}
        isSelected={taxIsActive.value}
        onValueChange={(value) => taxIsActive.onChange(value)}
      >
        Включити податки
      </Checkbox>

      {taxIsActive.value && (
        <>
          <Spacer y={2} />
          <CalculatorInputTaxRate />
        </>
      )}
    </div>
  )
})
