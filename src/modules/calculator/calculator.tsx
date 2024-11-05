import { useState } from 'react'

import { CalculatorProvider } from './calculator-provider'
import { CalculatorStore } from './calculator-store'
import { CalculatorForm } from './components/calculator-form'
import { CalculatorResult } from './components/calculator-result'

export const Calculator = () => {
  const [store] = useState(() => new CalculatorStore())

  return (
    <CalculatorProvider store={store}>
      <div className="w-full rounded-2xl border-2 border-gray-200 bg-white">
        <div className="flex flex-col gap-7 md:gap-10 px-3 py-7 md:px-7 md:py-10 lg:px-10 lg:py-14">
          <div className="w-full">
            <span className="text-3xl md:text-4xl font-medium">
              Хочу <br /> розрахувати
            </span>
          </div>
          <div className="flex gap-8 md:gap-14 max-lg:flex-col">
            <div className="w-full">
              <CalculatorForm />
            </div>
            <div className="w-full">
              <CalculatorResult />
            </div>
          </div>
        </div>
      </div>
    </CalculatorProvider>
  )
}
