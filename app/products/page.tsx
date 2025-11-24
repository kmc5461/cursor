import Link from 'next/link'
import { products, categories } from '../../lib/data'

export default function ProductsPage() {
  return (
    <div className="container-smooth py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Koleksiyon</p>
          <h1 className="text-3xl font-semibold">Tüm ürünler</h1>
        </div>
        <div className="flex gap-2 text-sm overflow-x-auto">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="px-4 py-2 rounded-full border bg-white text-gray-700">
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group">
            <div className="aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden relative shadow-soft">
              {product.tags && <div className="absolute right-3 top-3 text-xs bg-white rounded-full px-3 py-1 shadow">{product.tags[0]}</div>}
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
