// @/src/app/about/page.tsx

import { Profile } from '@/app/about/Profile'
import { Achievement } from '@/app/about/Achievement'
import { Event } from '@/app/about/Event'
import { type ReactElement } from 'react'

export default function Page (): ReactElement {
  return (
        <div className={'flex my-10 flex-col items-center gap-20'}>
            <Profile/>
            <Achievement/>
            <Event/>
        </div>
  )
}
