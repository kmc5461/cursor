import Link from "next/link";

const variants = [
  { name: "Renk", options: ["Siyah", "Krem", "Gri"] },
  { name: "Beden", options: ["XS", "S", "M", "L"] },
  { name: "Materyal", options: ["%100 Pamuk", "Kaşmir"] }
];

export default function ProductDetail() {
  return (
    <div className="mx-auto max-w-6xl gap-10 px-6 py-16 lg:grid lg:grid-cols-2">
      <div className="space-y-4">
        <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200" />
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-2xl bg-slate-100" />
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Maison Studio</p>
          <h1 className="font-display text-3xl">Silk Midi Dress</h1>
          <p className="text-lg text-slate-600">Varyant bazlı fiyatlandırma ve stok yönetimi için yapılandırılmış ürün detayı.</p>
          <p className="text-xl font-semibold">₺2800</p>
        </div>
        <div className="space-y-4">
          {variants.map((variant) => (
            <div key={variant.name} className="space-y-2">
              <p className="text-sm font-medium">{variant.name}</p>
              <div className="flex flex-wrap gap-2">
                {variant.options.map((option) => (
                  <button key={option} className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:border-slate-900">{option}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800">Sepete Ekle</button>
          <button className="rounded-full border border-slate-200 px-6 py-3 text-slate-900 hover:border-slate-900">Favori</button>
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          <p>• %100 Pamuk</p>
          <p>• Slim Fit</p>
          <p>• Waterproof</p>
        </div>
        <div className="space-y-4">
          <h2 className="font-display text-xl">Benzer ürünler</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <Link key={i} href="/products/related" className="group flex gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-slate-900">
                <div className="aspect-square w-24 rounded-xl bg-slate-100" />
                <div className="space-y-1 text-sm">
                  <p className="font-medium text-slate-900">AI öneri ürünü {i + 1}</p>
                  <span className="text-slate-500">₺2100</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
