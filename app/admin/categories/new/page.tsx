export default function NewCategoryPage() {
  return (
    <div className="card p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Yeni Kategori</h1>
      <input className="border rounded-lg px-3 py-2 text-sm" placeholder="İsim (TR)" />
      <input className="border rounded-lg px-3 py-2 text-sm" placeholder="İsim (EN)" />
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Kaydet</button>
    </div>
  )
}
