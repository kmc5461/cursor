import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'KleiderMafia Inspired Commerce',
  description: 'Minimal premium ecommerce platform with AI modules and admin dashboard.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
