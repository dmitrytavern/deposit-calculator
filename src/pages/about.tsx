import Link from 'next/link'

import { Spacer } from '@nextui-org/react'

export default function About() {
  return (
    <div>
      <h1 className="text-xl font-medium">Про цей калькулятор</h1>
      <Spacer y={4} />
      <p>Калькулятор був зроблений як курсова робота.</p>
      <Spacer y={2} />
      <p>
        Основною метою було розібратися в тому, як працюють депозити і самому
        реалізувати алгоритм їхнього підрахунку.
      </p>
      <Spacer y={2} />
      <p>
        Додатковою метою було написати проєкт із таким стеком, особливо Tailwind
        CSS.
      </p>
      <Spacer y={2} />
      <p>Вважаю, що я досяг обох цілей.</p>
      <Spacer y={4} />
      <Link href="/" className="underline">
        Повернутися до калькулятора
      </Link>
    </div>
  )
}
