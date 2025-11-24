'use client'

import { useEffect, useState } from 'react'
import { ShoppingBag, X } from 'lucide-react'
import { useCartStore } from '../../lib/store'

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const { items, removeItem, total } = useCartStore()

  useEffect(() => {
    if (items.length === 0) {
      setOpen(false)
    }
  }, [items])

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative p-2 rounded-full border hover:bg-gray-100">
        <ShoppingBag className="h-5 w-5" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-soft border p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Sepet</h4>
            <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-gray-100">
              <X className="h-4 w-4" />
            </button>
          </div>
          {items.length === 0 && <p className="text-sm text-gray-500">Sepet boş.</p>}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 text-sm">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-gray-500">{item.variant}</p>
                <p className="text-gray-900">{item.price.toFixed(2)} ₺</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-xs text-red-500">Kaldır</button>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-3">
            <span className="text-sm text-gray-500">Toplam</span>
            <span className="font-semibold">{total().toFixed(2)} ₺</span>
          </div>
          <a
            href="/checkout"
            className="block text-center w-full bg-black text-white rounded-lg py-2 text-sm hover:bg-gray-900"
            onClick={() => setOpen(false)}
          >
            Ödemeye Geç
          </a>
        </div>
      )}
    </div>
  )
}
