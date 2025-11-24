export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-16">
      <h1 className="font-display text-3xl">Ödeme</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="space-y-2">
            <p className="text-sm font-medium">Teslimat Bilgileri</p>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Ad Soyad" />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Adres" />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Telefon" />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium">Ödeme Yöntemi</p>
            <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-slate-900">Stripe Checkout</button>
            <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-slate-900">Kapıda Ödeme</button>
            <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-slate-900">EFT / Havale</button>
          </div>
          <button className="w-full rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800">Siparişi Tamamla</button>
        </div>
        <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="font-medium">Sipariş Özeti</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>Toplam</span><span>₺5400</span></div>
            <div className="flex justify-between"><span>Kargo</span><span>₺0</span></div>
            <div className="flex justify-between"><span>Kupon</span><span>-₺200</span></div>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <span>Genel Toplam</span>
            <span>₺5200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
