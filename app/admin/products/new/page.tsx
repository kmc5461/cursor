export default function NewProductPage() {
  return (
    <div className="card p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Yeni Ürün</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="İsim (TR)" />
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="İsim (EN)" />
        <textarea className="border rounded-lg px-3 py-2 text-sm md:col-span-2" placeholder="Açıklama" rows={3} />
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Fiyat" />
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Kategori" />
      </div>
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Kaydet</button>
    </div>
  )
}
