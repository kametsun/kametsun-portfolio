// @/src/app/page.tsx

import Image from 'next/image'
import { Links } from '@/app/components/Links'
import { Typing } from '@/app/components/Typing'
import { type ReactElement } from 'react'

export default function Home (): ReactElement {
  const introduction: string = 'I am kametsn, a computer science major in college.'
  return (
        <main className={'flex flex-col items-center justify-center pt-44 pb-24'}>
            <div>
                <Image className={'my-pic my-5'} src={'/images/my-pic.jpg'} alt={'my-pic'} width={100} height={100}/>
            </div>
            <div className={'my-5'}>
                <h1 className={'text-2xl'}>Hi✨</h1>
                <p>
                    <Typing text={introduction}/>
                </p>
            </div>
            <Links/>
        </main>
  )
}
