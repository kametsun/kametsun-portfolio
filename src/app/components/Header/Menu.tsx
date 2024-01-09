'use client'

import React, { type ReactElement, useState } from 'react'

export const Menu = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  interface Link {
    href: string
    text: string
  }

  const links: Link[] = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' }
  ]
  return (
        <div className={'mr-3'}>
            {/* mobile menu button */}
            <div className={'flex lg:hidden'}>
                <button
                    type={'button'}
                    className={'text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'}
                    aria-label={'toggle menu'}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen)
                    }}
                >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        ></path>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu open: "block", Menu close: "hidden" */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} -mx-4 lg:flex lg:items-center`}>
                {links.map((link: Link, index: number) => (
                    <a href={link.href}
                       key={index}
                       className={'block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400'}>
                        {link.text}
                    </a>
                ))}

            </div>
        </div>
  )
}
