import { useState } from 'react'

import { CalendarDate, parseDate } from '@internationalized/date'
import {
  Checkbox,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Spacer,
} from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import {
  transformZeroToEmpty,
  transformNumberToPretty,
  transformPrettyNumber,
} from '../utilities/transformation'

export const CalculatorForm = observer(function CalculatorForm() {
  const { store } = useCalculator()

  const rate = store.getField('rate')
  const period = store.getField('period')
  const date = store.getField('date')
  const amount = store.getField('amount')
  const tax = store.getField('tax')
  const taxIsActive = store.getField('taxIsActive')
  const replenishment = store.getField('replenishment')
  const replenishmentIsActive = store.getField('replenishmentIsActive')
  const capitalizationIsActive = store.getField('capitalizationIsActive')
  const currency = store.getField('currency')

  const [dateValue, setDateValue] = useState(
    parseDate(date.value.toISOString().split('T')[0]),
  )

  const onDatePickerChange = (data: CalendarDate) => {
    setDateValue(data)
    if (data) {
      date.onChange(new Date(data.year, data.month - 1, data.day))
    }
  }

  return (
    <div>
      <div className="flex">
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
          onValueChange={(value) =>
            amount.onChange(transformPrettyNumber(value))
          }
        />

        <Spacer x={4} />

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
      </div>

      <Spacer y={4} />

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
        value={transformNumberToPretty(rate.value)}
        onValueChange={(value) => rate.onChange(+value)}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">%</span>
          </div>
        }
      />

      <Spacer y={4} />

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

      <Spacer y={4} />

      <DatePicker
        size="sm"
        variant="bordered"
        label="Дата оформлення депозиту"
        isInvalid={date.error}
        errorMessage={date.errorMessage}
        value={dateValue}
        onChange={onDatePickerChange}
      />

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
        </>
      )}
    </div>
  )
})
