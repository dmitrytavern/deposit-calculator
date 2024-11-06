import { useState } from 'react'

import { CalculatorProvider } from './calculator-provider'
import { CalculatorStore } from './calculator-store'
import { CalculatorCard } from './components/calculator-card'
import { CalculatorHeader } from './components/calculator-header'
import { CalculatorInput } from './components/calculator-input'
import { CalculatorOutput } from './components/calculator-output'

export const Calculator = () => {
  const [store] = useState(() => new CalculatorStore())

  return (
    <CalculatorProvider store={store}>
      <CalculatorCard>
        <div className="flex flex-col gap-7 md:gap-10">
          <CalculatorHeader />
          <div className="flex gap-8 md:gap-14 max-lg:flex-col">
            <CalculatorInput />
            <CalculatorOutput />
          </div>
        </div>
      </CalculatorCard>
    </CalculatorProvider>
  )
}
