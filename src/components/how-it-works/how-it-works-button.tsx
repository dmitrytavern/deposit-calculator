import { ArrowDown } from '@/assets/icons/arrow-down'

export interface HowItWorksButtonProps {
  opened: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function HowItWorksButton({ opened, onClick }: HowItWorksButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left px-3 py-4 md:px-10 md:py-6"
    >
      <h1 className="text-md md:text-lg lg:text-xl font-medium">
        Як працює калькулятор?
      </h1>

      <span className={`transition-transform ${opened ? 'rotate-180' : ''}`}>
        <ArrowDown size={24} className="lg:hidden" />
        <ArrowDown size={28} className="max-lg:hidden" />
      </span>
    </button>
  )
}
