import { Spacer } from '@nextui-org/react'

import { HowItWorks } from '@/components/how-it-works'
import { Calculator } from '@/modules/calculator'

export default function Home() {
  return (
    <div>
      <Calculator />
      <Spacer y={4} />
      <HowItWorks />
    </div>
  )
}
