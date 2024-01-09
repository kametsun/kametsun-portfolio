import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/app/components/Footer/Footer'
import { Navigation } from '@/app/components/Navigation/Navigation'
import React, { type ReactElement } from 'react'
import Header from '@/app/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kametsun',
  description: 'kametsun site'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
        <html lang="ja">
        <body className={inter.className}>
        <Header/>
        <Navigation/>
        {children}
        <Footer/>
        </body>
        </html>
  )
}
