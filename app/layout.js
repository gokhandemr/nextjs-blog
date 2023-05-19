import { Roboto_Slab } from 'next/font/google'
import './globals.css'
const robotoSlab = Roboto_Slab({ subsets: ['latin'], weight: '500', })

export const metadata = {
  title: 'Next JS Dersi 1',
  description: 'Next.js dersi 1 açıklama alanı',
}

// pages
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <Header />
        <main className='main-page'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
