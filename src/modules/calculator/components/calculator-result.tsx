import { Divider, Spacer } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'

const toFixed = (number: number) => +number.toFixed(2)

const numberWithSpaces = (number: number): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const formatNumber = (number: number) => numberWithSpaces(toFixed(number))

export const CalculatorResult = observer(function CalculatorResult() {
  const { store } = useCalculator()

  if (!store.result) return <>Calculation</>

  return (
    <>
      <p>Вы получили:</p>
      <p className="text-4xl font-semibold">
        {store.currencySymbol} {formatNumber(store.result.totalAmount)}
      </p>
      <Spacer y={4} />

      <Divider />
      <Spacer y={4} />

      <p>Вложено</p>
      <p className="text-2xl font-medium">
        {store.currencySymbol} {formatNumber(store.result.totalInvestedAmount)}
      </p>
      <Spacer y={4} />

      <p>Полученно процентов</p>
      <p className="text-2xl font-medium">
        {store.currencySymbol} {formatNumber(store.result.totalPercentAmount)}
      </p>
      <Spacer y={4} />

      <p>Процентная ставка</p>
      <p className="text-2xl font-medium">
        {formatNumber(store.result.rate)}% годовых
      </p>
      <Spacer y={4} />

      {store.form.taxIsActive && (
        <>
          <p>Процентная ставка после оплаты налогов</p>
          <p className="text-2xl font-medium">
            {formatNumber(store.result.rateAfterTax)}% годовых
          </p>
          <Spacer y={4} />
          <p>Оплачено налогов</p>
          <p className="text-2xl font-medium">
            {store.currencySymbol} {formatNumber(store.result.totalTaxAmount)}
          </p>
        </>
      )}
    </>
  )
})
