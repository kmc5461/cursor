import { products } from '../../../../lib/data'
import { notFound } from 'next/navigation'

export default function ProductEditPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.slug === params.id)
  if (!product) return notFound()
  return (
    <div className="card p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <input defaultValue={product.name} className="border rounded-lg px-3 py-2 text-sm" />
      <textarea defaultValue={product.description} className="border rounded-lg px-3 py-2 text-sm" rows={3} />
      <input defaultValue={product.price} className="border rounded-lg px-3 py-2 text-sm" />
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Güncelle</button>
    </div>
  )
}
