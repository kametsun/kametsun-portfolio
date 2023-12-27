import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Footer} from "@/app/components/Footer/Footer";
import {Navigation} from "@/app/components/navigation/Navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kametsun',
  description: 'kametsun site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
