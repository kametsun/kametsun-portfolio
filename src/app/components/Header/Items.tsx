import { type ReactElement } from 'react'

export const Items = (): ReactElement => {
  interface Link {
    href: string
    text: string
  }

  const links: Link[] = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' }
  ]

  return (
        <div>
            <nav>
                <ul>
                    {links.map((link: Link, index: number) => (
                        <li key={index}>
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
  )
}
