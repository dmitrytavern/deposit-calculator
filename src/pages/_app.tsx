import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import { NextUIProvider, Spacer } from '@nextui-org/react'

import '@/assets/stylesheets/globals.css'
import { DefaultHead } from '@/components/default-head'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultHead />
      <NextUIProvider>
        <div className={`min-h-[100dvh] flex flex-col ${inter.className}`}>
          <main className="container lg:max-w-5xl mx-auto px-3 pt-8 md:pt-16">
            <Component {...pageProps} />
          </main>

          <Spacer y={4} />

          <div className="mt-auto"></div>

          <Footer />
        </div>
      </NextUIProvider>
    </>
  )
}
