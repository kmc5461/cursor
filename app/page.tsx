import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';

const highlights = [
  { slug: 'silk-tailored-blazer', title: 'Silk Tailored Blazer', price: '₺6.200', badge: 'New', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { slug: 'linen-safari-jacket', title: 'Linen Safari Jacket', price: '₺5.450', badge: 'Limited', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=801&q=80' },
  { slug: 'italian-wool-coat', title: 'Italian Wool Coat', price: '₺9.800', badge: 'AI Pick', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80' }
];

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section">
        <div className="container-wide grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">KleiderMafia Inspired</p>
            <h1 className="text-4xl md:text-5xl font-display leading-tight">Minimalist siluetler, AI destekli alışveriş deneyimi.</h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Varyant bazlı stok, dinamik fiyatlama, sadakat puanı ve kişiselleştirilmiş öneri motoruyla güçlendirilmiş premium koleksiyonlar.
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Yeni Gelenler</Link>
              <Link href="/lookbook" className="px-5 py-3 rounded-full border border-neutral-200 hover:border-neutral-900">Lookbook</Link>
            </div>
          </div>
          <div className="rounded-[28px] overflow-hidden shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50/80">
        <div className="container-wide flex items-center justify-between mb-8">
          <h2 className="text-2xl font-display">Yeni Gelenler</h2>
          <Link href="/products" className="text-sm underline">Tümünü Gör</Link>
        </div>
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <ProductCard key={item.slug} {...item} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-8 md:grid-cols-3">
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">AI Öneri Motoru</p>
            <h3 className="text-xl font-display">Davranış bazlı kişiselleştirme</h3>
            <p className="text-neutral-600">Benzer ürünler, birlikte satın alınanlar ve fiyat öneri sistemi tek platformda.</p>
          </div>
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Çoklu Ödeme</p>
            <h3 className="text-xl font-display">Stripe + Kapıda ödeme + EFT</h3>
            <p className="text-neutral-600">Bölgesel kargo kuralları, kuponlar ve ücretsiz kargo eşikleri otomatik.</p>
          </div>
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Admin PRO</p>
            <h3 className="text-xl font-display">TechUI tarzı kontrol paneli</h3>
            <p className="text-neutral-600">Depo, kargo, kampanya, influencer linkleri ve finans raporlarını tek panelden yönetin.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
