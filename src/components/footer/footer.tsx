import Link from 'next/link'
import { useRouter } from 'next/router'

import { Spacer } from '@nextui-org/react'

import { GitHubMark } from '@/assets/icons/github-mark'

export const Footer = () => {
  const { pathname } = useRouter()

  return (
    <footer className="px-3 py-5 text-xs text-center">
      {pathname !== '/about' && (
        <div>
          <Link
            href="/about"
            className="text-base underline hover:no-underline"
          >
            Про калькулятор
          </Link>

          <Spacer y={2} />
        </div>
      )}

      <div>Released under the MIT License.</div>
      <div>
        Copyright © 2024-present{' '}
        <a
          href="//github.com/dmitrytavern"
          target="_blank"
          className="font-medium hover:underline"
        >
          Dmitry Tavern
        </a>
      </div>

      <Spacer y={2} />

      <div className="flex justify-center">
        <a
          href="//github.com/dmitrytavern/deposit-calculator"
          target="_blank"
          className="text-zinc-500 hover:text-zinc-600 transition-colors"
        >
          <GitHubMark size={24} />
        </a>
      </div>
    </footer>
  )
}
