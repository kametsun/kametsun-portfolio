import { type ReactElement } from 'react'

export const History = (): ReactElement => {
  interface History {
    date: string
    content: string
  }

  const histories: History[] = [
    { date: '2003-07', content: '静岡県にて生まれる' },
    { date: '2022-04 ~', content: '帝京大学 理工学部 情報科学科' },
    { date: '2022-04 ~', content: '静岡産業技術専門学校 みらい情報科' }
  ]

  return (
        <div className="my-12 w-9/10 bg-background bg-opacity-70 p-4 md:p-10 lg:w-3/5 xl:w-1/2"><h1
            className="w-fit border-b-2 border-emerald-400 text-2xl">History</h1>
            <table className="my-5 w-full table-auto">
                <thead>
                <tr>
                    <th className="w-1/3 px-4 py-2">Date</th>
                    <th className="px-4 py-2">Content</th>
                </tr>
                </thead>
                <tbody>
                {histories.map((history: History, index: number) => (
                    <tr key={index}
                        className="hover:text-background. border-l border-emerald-400 bg-background">
                        <td className="flex h-fit p-2 md:px-4 md:py-2"><p>{history.date}</p><p className="ml-auto">▷</p>
                        </td>
                        <td className="border-l border-emerald-400 p-2 md:px-4 md:py-2"
                            style={{ whiteSpace: 'nowrap' }}>{history.content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
  )
}
