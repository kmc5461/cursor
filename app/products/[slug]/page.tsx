import { notFound } from 'next/navigation'
import { products } from '../../../lib/data'
import { useCartStore } from '../../../lib/store'
import { Fragment } from 'react'

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return notFound()

  const addToCart = useCartStore.getState().addItem

  return (
    <div className="container-smooth py-12 grid lg:grid-cols-2 gap-10">
      <div className="space-y-4">
        <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/5] bg-gray-100" style={{ backgroundImage: `url(${product.images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="flex gap-3">
          {product.images.map((img, idx) => (
            <div key={idx} className="h-24 w-24 rounded-xl bg-gray-100" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-sm text-gray-500 uppercase tracking-[0.25em]">{product.category}</p>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
        <p className="text-2xl font-semibold">{product.price.toLocaleString('tr-TR')} ₺</p>

        <div className="space-y-4">
          {Object.entries(product.variants).map(([type, values]) => (
            <div key={type} className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.2em]">{type}</p>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span key={value} className="px-3 py-2 rounded-full border bg-white text-sm text-gray-700">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-full text-sm"
          onClick={() =>
            addToCart({ id: product.slug, name: product.name, variant: Object.values(product.variants).flat()[0], price: product.price })
          }
        >
          Sepete Ekle
        </button>

        <div>
          <h3 className="text-lg font-semibold mb-3">Benzer Ürünler</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {products
              .filter((p) => p.category === product.category && p.slug !== product.slug)
              .map((item) => (
                <a key={item.slug} href={`/products/${item.slug}`} className="block p-3 rounded-2xl border bg-white hover:shadow-soft">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-gray-600">{item.price.toLocaleString('tr-TR')} ₺</p>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
