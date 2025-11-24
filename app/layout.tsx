import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Link from 'next/link'
import { LocaleSwitcher } from '../components/layout/locale-switcher'
import { ThemeProvider } from '../components/layout/theme-provider'
import { CartDrawer } from '../components/layout/cart-drawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KleiderMafia Modern Shop',
  description: 'Minimal ve modern giyim mağazası'
}

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/products', label: 'Ürünler' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/contact', label: 'İletişim' }
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
              <div className="container-smooth flex items-center justify-between py-4">
                <Link href="/" className="font-semibold tracking-tight text-xl">KleiderMafia</Link>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                  {navLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-gray-900 text-gray-600 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/admin" className="text-gray-600 hover:text-gray-900">Admin</Link>
                </nav>
                <div className="flex items-center gap-3">
                  <LocaleSwitcher />
                  <CartDrawer />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-white py-10 mt-16">
              <div className="container-smooth grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">KleiderMafia</h4>
                  <p className="text-gray-500">Modern, minimal ve zamansız parçalar.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Hızlı Bağlantılar</h4>
                  <div className="flex flex-col gap-2">
                    {navLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="hover:text-gray-900">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Bülten</h4>
                  <p className="text-gray-500 mb-4">Yeni koleksiyonlardan ilk sen haberdar ol.</p>
                  <form className="flex gap-2">
                    <input className="flex-1 border rounded-lg px-3 py-2 text-sm" placeholder="E-posta" />
                    <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Gönder</button>
                  </form>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
