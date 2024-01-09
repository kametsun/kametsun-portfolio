import { type ReactElement } from 'react'

export const Footer = (): ReactElement => {
  // 現在の西暦を取得
  const year = new Date().getFullYear()

  return (
        <div className={'flex flex-col items-center justify-center my-auto mx-auto pb-3'}>
            <p>{year} kametsun</p>
        </div>
  )
}
