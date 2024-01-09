'use client'

import React, { type ReactElement } from 'react'
import { useRouter } from 'next/navigation'

export default function Header (): ReactElement {
  const router = useRouter()

  return (
        <div className={'headerArea'}>
            <h1 className={'headerText'} onClick={() => {
              router.push('/')
            }}>
                kametsun
            </h1>
        </div>
  )
}
