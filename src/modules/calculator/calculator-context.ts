import { createContext } from 'react'

import type { CalculatorStore } from './calculator-store'

type ContextData = {
  store: CalculatorStore
}

export const CalculatorContext = createContext<ContextData | undefined>(
  undefined,
)
