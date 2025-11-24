'use client'

import { usePathname, useRouter } from 'next/navigation'

const locales = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' }
]

export function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (locale: string) => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length > 0 && locales.some((l) => l.code === segments[0])) {
      segments[0] = locale
    } else {
      segments.unshift(locale)
    }
    router.push('/' + segments.join('/'))
  }

  return (
    <div className="flex items-center gap-2 text-xs font-semibold">
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => handleChange(locale.code)}
          className="px-3 py-1 rounded-full border hover:bg-gray-100"
        >
          {locale.label}
        </button>
      ))}
    </div>
  )
}
