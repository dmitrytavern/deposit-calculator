import { useState } from 'react'

import { CalculatorProvider } from './calculator-provider'
import { CalculatorStore } from './calculator-store'
import { CalculatorForm } from './components/calculator-form'
import { CalculatorResult } from './components/calculator-result'

export const Calculator = () => {
  const [store] = useState(() => new CalculatorStore())

  return (
    <CalculatorProvider store={store}>
      <div className="w-full mx-auto max-w-5xl bg-white overflow-hidden rounded-2xl border-2 border-gray-200">
        <div className="flex max-md:flex-col">
          <div className="w-full p-3 pb-7 md:p-8">
            <CalculatorForm />
          </div>
          <div className="w-full p-3 md:p-8 bg-gray-100">
            <CalculatorResult />
          </div>
        </div>
      </div>
    </CalculatorProvider>
  )
}
