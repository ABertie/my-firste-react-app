"use client"

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <header>
          <nav>
            <ul className='flex gap-2'>
              <li>
                <a href="/">Forsiden</a>
              </li>
              <li>
                <a href="/settings">Indstillinger</a>
              </li>
              <li>
                <a href="/counter">Counter</a>
              </li>
              <li>
                <a href="/pokemons">Pokemons</a>
              </li>
              <li>
                <a href="/form">Form</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}