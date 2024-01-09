// @/src/app/about/page.tsx

import { Achievement } from '@/app/about/Achievement'
import { Event } from '@/app/about/Event'
import { type ReactElement } from 'react'
import { History } from '@/app/about/History'
import { Profile } from '@/app/about/Profile'

export default function Page (): ReactElement {
  return (
        <div className={'flex my-10 flex-col items-center gap-20'}>
            <Profile/>
            <History/>
            <Achievement/>
            <Event/>
        </div>
  )
}
