import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { products } from '../lib/data'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden bg-white">
        <div className="container-smooth grid md:grid-cols-2 gap-10 items-center py-20">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.25em] text-xs text-gray-500">Koleksiyon 24/25</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Minimal ve zamansız parçalar</h1>
            <p className="text-lg text-gray-600 max-w-xl">
              İnce düşünülmüş detaylar, nefes alan kumaşlar ve zamansız formlarla modern gardırobunu inşa et.
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-2">
                Koleksiyonu Gör <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/categories/outerwear" className="text-gray-800 text-sm border px-6 py-3 rounded-full">
                Ceket & Kaban
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center rounded-3xl h-[420px] shadow-soft"
          ></motion.div>
        </div>
      </section>

      <section className="container-smooth space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Yeni Gelenler</p>
            <h2 className="text-2xl font-semibold">Taze silüetler</h2>
          </div>
          <Link href="/products" className="text-sm text-gray-700 flex items-center gap-2 hover:gap-3 transition-all">
            Tüm ürünler <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group">
              <div className="aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden relative shadow-soft">
                <div className="absolute right-3 top-3 text-xs bg-white rounded-full px-3 py-1 shadow">{product.tags[0]}</div>
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
      </section>

      <section className="container-smooth bg-white rounded-3xl shadow-soft p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Manifesto</p>
            <h3 className="text-3xl font-semibold">Daha iyi kumaş, daha iyi form</h3>
            <p className="text-gray-600 leading-relaxed">
              Tasarım anlayışımız nefes alan doğal kumaşlar, yalın silüetler ve kalıplarıyla zamansız parçalar üretmek üzerine kurulu.
              Her koleksiyonda kaliteye ve sürdürülebilir üretime öncelik veriyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 text-white rounded-2xl p-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Kalite</p>
              <h4 className="text-xl font-semibold">Avrupa tedarik zinciri</h4>
              <p className="text-gray-200 text-sm">İtalya ve Portekiz üretim tesisleriyle yüksek kalite standartları.</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Estetik</p>
              <h4 className="text-xl font-semibold">Minimal hatlar</h4>
              <p className="text-gray-600 text-sm">İnce düşünülmüş detaylarla modern ve dengeli bir görünüm.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Sürdürülebilir</p>
              <h4 className="text-xl font-semibold">Düşük etki</h4>
              <p className="text-gray-600 text-sm">Geri dönüştürülebilir materyaller ve düşük su tüketimli üretim.</p>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Konfor</p>
              <h4 className="text-xl font-semibold">Gün boyu rahatlık</h4>
              <p className="text-gray-200 text-sm">Esnek yapılar ve nefes alan kumaşlarla konforlu his.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
