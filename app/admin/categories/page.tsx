import Link from 'next/link'
import { categories } from '../../../lib/data'

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Link href="/admin/categories/new" className="px-4 py-2 rounded-lg bg-black text-white text-sm">
          Yeni Kategori
        </Link>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Açıklama</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {categories.map((cat) => (
              <tr key={cat.slug} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Link href={`/admin/categories/${cat.slug}`} className="font-semibold text-gray-900">
                    {cat.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-gray-600">{cat.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
