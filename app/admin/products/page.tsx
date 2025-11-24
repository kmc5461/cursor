import Link from 'next/link'
import { products } from '../../../lib/data'

export default function AdminProductsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link href="/admin/products/new" className="px-4 py-2 rounded-lg bg-black text-white text-sm">
          Yeni Ürün
        </Link>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3">Ürün</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Fiyat</th>
              <th className="px-4 py-3">Durum</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <tr key={product.slug} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Link href={`/admin/products/${product.slug}`} className="font-semibold text-gray-900">
                    {product.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-gray-600">{product.category}</td>
                <td className="px-4 py-3 text-gray-600">{product.price.toLocaleString('tr-TR')} ₺</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs">Aktif</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
