import { PropsWithChildren } from 'react'

export const CalculatorCard = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border-2
        border-gray-200
        bg-white
        px-3
        py-7
        md:px-7
        md:py-10
        lg:px-10
        lg:py-14
        "
    >
      {children}
    </div>
  )
}
