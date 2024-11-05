import { useState } from 'react'

import { Spacer } from '@nextui-org/react'

import { ArrowDown } from './arrow-down'

export function HowItWorks() {
  const [opened, setOpened] = useState(false)

  const toggleOpened = () => setOpened((previousValue) => !previousValue)

  return (
    <div className="w-full rounded-2xl border-2 border-gray-200 bg-white">
      <button
        className="w-full flex justify-between items-center text-left px-3 py-3 md:px-7 md:py-7"
        onClick={toggleOpened}
      >
        <h1 className="text-xl font-medium">
          Як працює цей депозитний калькулятор?
        </h1>

        <span className={`transition-transform ${opened ? 'rotate-180' : ''}`}>
          <ArrowDown size={28} />
        </span>
      </button>

      {opened && <HowItWorksContent />}
    </div>
  )
}

const HowItWorksContent = () => {
  return (
    <div className="px-3 pb-3 md:px-7 md:pb-7">
      <h2 className="text-lg font-medium">Основні терміни</h2>
      <Spacer y={2} />

      <ul className="flex flex-col gap-1 pl-8 list-disc">
        <li>
          <span className="font-medium">Сума депозиту</span> — це початкова сума
          грошей, яку ви вкладаєте на депозитний рахунок для отримання
          відсоткового доходу.
        </li>
        <li>
          <span className="font-medium">Валюта</span> — грошова одиниця, у якій
          відкрито депозит. Це може бути гривня (UAH), долар США (USD) або євро
          (EUR).
        </li>
        <li>
          <span className="font-medium">Термін</span> — період, на який
          відкривається депозит. Вимірюється в місяцях.
        </li>
        <li>
          <span className="font-medium">Ставка</span> — річний відсоток, за яким
          нараховуються доходи на депозит.
        </li>
        <li>
          <span className="font-medium">Ставка</span> — річний відсоток, за яким
          нараховуються доходи на депозит.
        </li>
        <li>
          <span className="font-medium">Дата оформлення</span> — день, з якого
          починається розрахунок депозиту.
        </li>

        <li>
          <span className="font-medium">Капіталізація</span> — функція, за якої
          отримані відсотки додаються до основної суми депозиту на початку
          кожного нового місяця.
        </li>

        <li>
          <span className="font-medium">Щомісячне поповнення</span> — сума, яку
          ви додаєте до депозиту на початку кожного нового місяця, якщо така
          функція активована.
        </li>

        <li>
          <span className="font-medium">Податок</span> — сума, яку вираховують
          із вашого доходу відповідно до чинного законодавства.
        </li>
      </ul>

      <Spacer y={8} />
      <h2 className="text-lg font-medium">
        Принцип роботи депозитного калькулятора
      </h2>
      <Spacer y={2} />

      <ul className="flex flex-col gap-1 pl-8 list-disc">
        <li>
          Термін депозиту розбивається на окремі місяці, кожен з яких має певну
          кількість днів для розрахунку доходу. Перший та останній місяці можуть
          мати неповну кількість днів.
        </li>

        <li>
          <span>Для кожного місяця обчислюється</span>
          <ul className="flex flex-col gap-1 pl-8 list-decimal">
            <li>
              <span>Дохід за день</span> = (поточний баланс / (ставка / 100)) /
              кількість днів у році.
            </li>

            <li>
              <span>Податок за день</span> = (поточний баланс / (ставка податку
              / 100)) / кількість днів у році.
            </li>
          </ul>
        </li>
        <li>
          Дохід за день множиться на кількість робочих днів, щоб отримати дохід
          і податок за місяць.
        </li>

        <li>
          <span>На початку кожного місяця відбувається оновлення балансу:</span>
          <ul className="flex flex-col gap-1 pl-8 list-decimal">
            <li>
              Якщо активована капіталізація, до балансу додаються відсотки.
            </li>
            <li>
              Якщо активований податок, з балансу вираховується податкова сума.
            </li>
            <li>
              Якщо активоване щомісячне поповнення, до балансу додається сума
              поповнення.
            </li>
          </ul>
        </li>

        <li>У кінці терміну депозиту здійснюється підсумковий розрахунок.</li>
      </ul>

      <Spacer y={8} />
      <h2 className="text-lg font-medium">Обмеження</h2>
      <Spacer y={2} />

      <ul className="flex flex-col gap-1 pl-8 list-disc">
        <li>Перший і останній день депозиту не нараховують відсотки.</li>
        <li>В перший місяць воно не нараховується щомісячне поповнення.</li>
        <li>
          Якщо депозит відкритий у перший день місяця, на останній місяць
          депозиту не додається щомісячне поповнення
        </li>
        <li>Щоденний дохід розраховується з урахуванням високосного року.</li>
      </ul>
    </div>
  )
}
