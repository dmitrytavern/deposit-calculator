import { ArrowDown } from '@/assets/icons/arrow-down'

export interface HowItWorksButtonProps {
  opened: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function HowItWorksButton({ opened, onClick }: HowItWorksButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left px-3 py-3 md:px-7 md:py-7"
    >
      <h1 className="text-lg lg:text-xl font-medium">
        Як працює депозитний калькулятор?
      </h1>

      <span className={`transition-transform ${opened ? 'rotate-180' : ''}`}>
        <ArrowDown size={28} />
      </span>
    </button>
  )
}
