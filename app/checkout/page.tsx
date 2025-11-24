import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function CheckoutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 card p-6 space-y-4">
          <h1 className="text-2xl font-display">Ödeme</h1>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="border border-neutral-200 rounded-xl px-4 py-3" placeholder="Ad Soyad" />
            <input className="border border-neutral-200 rounded-xl px-4 py-3" placeholder="E-posta" />
            <input className="border border-neutral-200 rounded-xl px-4 py-3" placeholder="Adres" />
            <input className="border border-neutral-200 rounded-xl px-4 py-3" placeholder="Telefon" />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <button className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-neutral-900">Stripe</button>
            <button className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-neutral-900">Kapıda Ödeme</button>
            <button className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-neutral-900">EFT / Havale</button>
          </div>
          <button className="w-full px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Siparişi Tamamla</button>
        </div>
        <div className="card p-6 space-y-4">
          <h2 className="text-xl font-display">Sipariş Özeti</h2>
          <div className="flex justify-between text-sm text-neutral-600">
            <span>Ürünler</span>
            <span>₺10.200</span>
          </div>
          <div className="flex justify-between text-sm text-neutral-600">
            <span>Kargo</span>
            <span>Ücretsiz</span>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <span>Toplam</span>
            <span>₺10.200</span>
          </div>
          <div className="text-sm text-neutral-600">Kupon kodu, sadakat puanı ve ücretsiz kargo kuralları otomatik uygulanır.</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
