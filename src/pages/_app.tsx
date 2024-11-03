import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import { NextUIProvider } from '@nextui-org/react'

import '@/assets/stylesheets/globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}
