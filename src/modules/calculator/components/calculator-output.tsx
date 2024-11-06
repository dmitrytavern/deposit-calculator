import { Divider, Spacer } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

import { useCalculator } from '../use-calculator'
import { transformNumberToPretty } from '../utilities/transformation'

export const CalculatorOutput = observer(function CalculatorOutput() {
  const { store } = useCalculator()

  if (!store.result) return <>Прораховуємо...</>

  return (
    <div className="w-full">
      <div>
        <div>
          <span className="text-lg text-zinc-800 font-semibold">
            Ви отримаєте
          </span>
        </div>

        <Spacer y={2} />

        <div className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          <span className="text-5xl font-extrabold tracking-wide">
            {transformNumberToPretty(store.result.totalAmount)}
          </span>
          <span className="text-3xl font-extrabold">
            {store.currencySymbol}
          </span>
        </div>
      </div>

      <Spacer y={4} />

      <Divider />

      <Spacer y={4} />

      <div>
        <div>
          <span className="text-sm text-zinc-800 font-medium">Вкладено</span>
        </div>
        <div>
          <span className="text-2xl font-semibold tracking-wide">
            {transformNumberToPretty(store.result.totalInvestedAmount)}
          </span>
          <span className="text-lg font-semibold">{store.currencySymbol}</span>
        </div>
      </div>

      <Spacer y={3} />

      <div>
        <div>
          <span className="text-sm text-zinc-800 font-medium">Відсотки</span>
        </div>
        <div>
          <span className="text-2xl font-semibold tracking-wide">
            {transformNumberToPretty(store.result.totalPercentAmount)}
          </span>
          <span className="text-lg font-semibold">{store.currencySymbol}</span>
        </div>
      </div>

      <Spacer y={3} />

      <div>
        <div>
          <span className="text-sm text-zinc-800 font-medium">Ставка</span>
        </div>
        <div>
          <span className="text-2xl font-semibold tracking-wide">
            {transformNumberToPretty(store.result.rate)}%
          </span>
        </div>
      </div>

      <Spacer y={3} />

      {store.form.taxIsActive && (
        <>
          <div>
            <div>
              <span className="text-sm text-zinc-800 font-medium">
                Ставка після сплати податків
              </span>
            </div>
            <div>
              <span className="text-2xl font-semibold tracking-wide">
                {transformNumberToPretty(store.result.rateAfterTax)}%
              </span>
            </div>
          </div>

          <Spacer y={3} />

          <div>
            <div>
              <span className="text-sm text-zinc-800 font-medium">
                Сплачено податку
              </span>
            </div>
            <div>
              <span className="text-2xl font-semibold tracking-wide">
                {transformNumberToPretty(store.result.totalTaxAmount)}
              </span>
              <span className="text-lg font-semibold">
                {store.currencySymbol}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
})
