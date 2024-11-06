export interface CalculatorOutputSubtitleProps {
  title: string
}

export const CalculatorOutputSubtitle = ({
  title,
}: CalculatorOutputSubtitleProps) => {
  return <span className="text-sm text-zinc-800 font-medium">{title}</span>
}
