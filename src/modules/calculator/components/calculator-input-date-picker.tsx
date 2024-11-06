import { useState } from 'react'

import { CalendarDate, parseDate } from '@internationalized/date'
import { DatePicker } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'

export const CalculatorInputDatePicker = observer(
  function CalculatorInputDatePicker() {
    const { store } = useCalculator()

    const date = store.getField('date')

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
      <DatePicker
        size="sm"
        variant="bordered"
        label="Дата оформлення депозиту"
        isInvalid={date.error}
        errorMessage={date.errorMessage}
        value={dateValue}
        onChange={onDatePickerChange}
      />
    )
  },
)
