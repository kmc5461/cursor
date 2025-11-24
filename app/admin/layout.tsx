import Link from 'next/link'
import { ReactNode } from 'react'
import { BarChart3, Package, Layers, ShoppingBag, Image, Users } from 'lucide-react'

const links = [
  { href: '/admin', label: 'Dashboard', icon: BarChart3 },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/categories', label: 'Categories', icon: Layers },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/admin/inventory', label: 'Inventory', icon: Layers },
  { href: '/admin/banners', label: 'Banners', icon: Image },
  { href: '/admin/users', label: 'Users', icon: Users }
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-gray-50">
      <aside className="bg-white border-r p-6 space-y-6">
        <Link href="/" className="font-semibold text-xl">Kleider Admin</Link>
        <nav className="space-y-1 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <link.icon className="h-4 w-4" /> {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="p-8 space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Admin</h1>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}
