import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories, products } from '../../../lib/data'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug)
  if (!category) return notFound()
  const filtered = products.filter((p) => p.category === category.slug)

  return (
    <div className="container-smooth py-12 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Kategori</p>
          <h1 className="text-3xl font-semibold">{category.name}</h1>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </div>
        <Link href="/products" className="text-sm text-gray-700 underline">
          Tüm ürünler
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group">
            <div className="aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden relative shadow-soft">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${product.images[0]})` }} />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div>
                <p className="font-semibold text-gray-900">{product.name}</p>
                <p className="text-gray-500">{product.category}</p>
              </div>
              <p className="text-gray-900">{product.price.toLocaleString('tr-TR')} ₺</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
