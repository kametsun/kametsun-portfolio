import Link from 'next/link'
import { type ReactElement } from 'react'

export const Links = (): ReactElement => {
  return (
        <div className={'links'}>
            <Link href="/about">
                <button
                    className="my-0 mx-2 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                    About
                </button>
            </Link>
            <Link href={'https://twitter.com/_kametsun_'}>
                <button
                    className={'my-0 mx-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'}
                >
                    X
                </button>
            </Link>
            <Link href={'https://github.com/kametsun'}>
                <button
                    className={'my-0 mx-2 bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-b-pink-700 hover:border-pink-500 rounded'}
                >
                    Github
                </button>
            </Link>
        </div>
  )
}
