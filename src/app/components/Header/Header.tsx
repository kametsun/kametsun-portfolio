import React, { type ReactElement } from 'react'
import { Logo } from '@/app/components/Header/Logo'
import { Menu } from '@/app/components/Header/Menu'

export default function Header (): ReactElement {
  return (
        <div id={'header'} className={'mt-3'}>
            <nav className={'w-full'}>
                <div className={'flex justify-between max-w-5xl mx-auto'}>
                    <Logo/>
                    <Menu/>
                </div>
            </nav>
        </div>
  )
}
