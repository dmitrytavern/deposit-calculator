import { PropsWithChildren } from 'react'

import { CalculatorContext } from './calculator-context'
import type { CalculatorStore } from './calculator-store'

export type CalculatorProviderProps = PropsWithChildren<{
  store: CalculatorStore
}>

export const CalculatorProvider = ({
  store,
  children,
}: CalculatorProviderProps) => {
  return (
    <CalculatorContext.Provider value={{ store: store }}>
      {children}
    </CalculatorContext.Provider>
  )
}
