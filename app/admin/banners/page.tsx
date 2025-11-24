export default function BannersPage() {
  return (
    <div className="card p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Banners</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Başlık (TR)" />
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Başlık (EN)" />
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Alt Metin (TR)" />
        <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Alt Metin (EN)" />
        <input className="border rounded-lg px-3 py-2 text-sm md:col-span-2" placeholder="Görsel URL" />
      </div>
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Kaydet</button>
    </div>
  )
}
