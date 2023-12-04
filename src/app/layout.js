"use client"

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <header>
          <nav>
            <ul>
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
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}