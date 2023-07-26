import './globals.css'
import type { Metadata } from 'next'
import Nav from "./components/Nav"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className='main'>
        <button className='black-btn'></button>
      <div className='gradient' />
    </div>

    <main className='app'>
    <Nav/>
      {children}
    </main>
      </body>
    </html>
  )
}