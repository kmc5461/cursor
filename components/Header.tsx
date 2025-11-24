'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/products', label: 'Mağaza' },
  { href: '/lookbook', label: 'Lookbook' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/contact', label: 'İletişim' }
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="font-display text-xl tracking-tight">KleiderMafia Studio</Link>
        <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.08em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-brand-600 transition-colors ${pathname === item.href ? 'text-brand-600' : 'text-neutral-700'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <Link href="/account/orders" className="hover:text-brand-600">Hesabım</Link>
            <Link href="/checkout" className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Sepet</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
