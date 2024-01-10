import { type ReactElement } from 'react'

export const Logo = (): ReactElement => {
  return (
        <div className={'flex items-center ml-3'}>
            <a href={'/'}>
                <h2 className={'text-xl font-bold hover:text-indigo-600 dark:hover:text-indigo-400'}>kametsun</h2>
            </a>
        </div>
  )
}
