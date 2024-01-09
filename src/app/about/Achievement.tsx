import React, { type ReactElement } from 'react'

export const Achievement = (): ReactElement => {
  interface Achievement {
    date: string
    content: string
  }

  const achievements: Achievement[] = [
    { date: '2018-12', content: '全国都道府県対抗中学校バレーボール大会 ベスト16' },
    { date: '2019-03', content: '全国私立高等学校男女バレーボール選手権大会 ベスト16' },
    { date: '2022-09', content: '全国ヤングバレーボールクラブ男女優勝大会 ベスト4' }
  ]

  return (
        <div className="ml-auto my-12 w-9/10 bg-background bg-opacity-70 p-4 md:p-10 lg:w-3/5 xl:w-1/2">
            <h1 className="w-fit border-b-2 border-emerald-400 text-2xl">Achievement</h1>
            <table className="my-5 w-full table-auto">
                <thead>
                <tr>
                    <th className="w-1/3 px-4 py-2">Date</th>
                    <th className="px-4 py-2">Content</th>
                </tr>
                </thead>
                <tbody>
                {achievements.map((achievement, index) => (
                    <tr key={index} className="hover:text-background border-l border-emerald-400 bg-background">
                        <td className="flex h-fit p-2 md:px-4 md:py-2">
                            <p>{achievement.date}</p>
                            <p className="ml-auto">▷</p>
                        </td>
                        <td className="border-l border-emerald-400 p-2 md:px-4 md:py-2">
                            {achievement.content}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
  )
}
