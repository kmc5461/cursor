import { categories } from '../../../../lib/data'
import { notFound } from 'next/navigation'

export default function CategoryEditPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.slug === params.id)
  if (!category) return notFound()
  return (
    <div className="card p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{category.name}</h1>
      <input defaultValue={category.name} className="border rounded-lg px-3 py-2 text-sm" />
      <textarea defaultValue={category.description} className="border rounded-lg px-3 py-2 text-sm" rows={3} />
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Güncelle</button>
    </div>
  )
}
