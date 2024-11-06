import { useState } from 'react'

import { HowItWorksButton } from './how-it-works-button'
import { HowItWorksContent } from './how-it-works-content'

export function HowItWorks() {
  const [opened, setOpened] = useState(false)

  const toggleOpened = () => setOpened((previousValue) => !previousValue)

  return (
    <div className="w-full rounded-2xl border-2 border-gray-200 bg-white">
      <HowItWorksButton opened={opened} onClick={toggleOpened} />

      {opened && (
        <div className="px-3 pb-3 md:px-7 md:pb-7">
          <HowItWorksContent />
        </div>
      )}
    </div>
  )
}
