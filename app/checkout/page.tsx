export default function CheckoutPage() {
  return (
    <div className="container-smooth py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="card p-6 space-y-4">
          <h2 className="text-xl font-semibold">Teslimat Bilgileri</h2>
          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Ad Soyad" />
          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="E-posta" />
          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Adres" />
          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Şehir" />
          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Posta Kodu" />
        </div>
        <div className="card p-6 space-y-4">
          <h2 className="text-xl font-semibold">Ödeme Özeti</h2>
          <div className="flex items-center justify-between text-sm">
            <span>Ara toplam</span>
            <span>6.000 ₺</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Kargo</span>
            <span>Ücretsiz</span>
          </div>
          <div className="flex items-center justify-between text-lg font-semibold border-t pt-3">
            <span>Toplam</span>
            <span>6.000 ₺</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-full text-sm">Stripe ile Ödeme</button>
        </div>
      </div>
    </div>
  )
}
