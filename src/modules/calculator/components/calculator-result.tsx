import { useEffect, useState } from 'react'

import { Divider, Spacer } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { calculate } from '../utils/calculation'

const toFixed = (number: number) => +number.toFixed(2)

export const CalculatorResult = observer(function CalculatorResult() {
  const { store } = useCalculator()
  const [state, setState] = useState(
    () => store.stateFormIsValid && calculate(store.stateForm),
  )

  useEffect(() => {
    if (store.stateFormIsValid) {
      setState(calculate(store.stateForm))
    }
  }, [store.stateForm, store.stateFormIsValid])

  if (!state) return <>Calculation</>

  const total =
    state.investedAmount +
    state.totalAmount -
    (store.stateForm.taxIsActive ? state.taxAmount : 0)

  return (
    <>
      <p>Вы получили:</p>
      <h2>${toFixed(total)}</h2>
      <Spacer y={4} />

      <Divider />
      <Spacer y={4} />

      <p>Вложено</p>
      <p>${toFixed(state.investedAmount)}</p>
      <Spacer y={4} />

      <p>Полученно процентов</p>
      <p>${toFixed(state.totalAmount)}</p>
      <Spacer y={4} />

      <p>Процентная ставка</p>
      <p>{toFixed(state.rate)}% годовых</p>
      <Spacer y={4} />

      {store.stateForm.taxIsActive && (
        <>
          <p>Процентная ставка после оплаты налогов</p>
          <p>{toFixed(state.rateAfterTax)}% годовых</p>
          <Spacer y={4} />
          <p>Оплачено налогов</p>
          <p>${toFixed(state.taxAmount)}</p>
        </>
      )}
    </>
  )
})
