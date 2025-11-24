import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import Link from 'next/link';

const gallery = [
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80'
];

export default function ProductDetailPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide grid gap-12 lg:grid-cols-2">
        <div className="grid gap-4">
          {gallery.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-[24px] border border-neutral-100">
              <img src={src} alt="Galeri" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Studio Essentials</p>
            <h1 className="text-3xl font-display">Italian Wool Coat</h1>
            <p className="text-xl font-semibold">₺9.800</p>
            <div className="flex gap-2 text-xs uppercase tracking-[0.18em] text-neutral-600">
              <span className="px-3 py-1 rounded-full bg-neutral-100">%100 Wool</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100">Slim Fit</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100">Water Repellent</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-neutral-600">Renk seçin</p>
              <div className="flex gap-2">
                {['Siyah', 'Kum', 'Gece'].map((color) => (
                  <button key={color} className="px-4 py-2 rounded-full border border-neutral-200 hover:border-neutral-900">{color}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-neutral-600">Beden seçin</p>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="px-4 py-2 rounded-full border border-neutral-200 hover:border-neutral-900">{size}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Sepete Ekle</button>
            <button className="px-6 py-3 rounded-full border border-neutral-200 hover:border-neutral-900">Favori</button>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-lg">AI öneri motoru</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>Bu ürünü alanların sepetindeki diğer parçaları keşfedin.</li>
              <li>Benzer siluet ve kumaş bazlı öneriler.</li>
              <li>Fiyat optimizasyonu ve backorder seçenekleri.</li>
            </ul>
          </div>
          <div className="card p-5 space-y-3">
            <h4 className="font-display text-lg">Kargo &amp; İade</h4>
            <p className="text-neutral-600">Türkiye genelinde aynı gün kargo seçenekleri, bölgesel fiyatlandırma ve 30 gün iade garantisi.</p>
            <Link href="/contact" className="text-sm underline">Destek ekibine ulaş</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
