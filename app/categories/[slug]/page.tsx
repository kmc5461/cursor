import Link from "next/link";

export default function CategoryPage() {
  const products = Array.from({ length: 6 }).map((_, i) => ({
    title: `Kategori ürünü ${i + 1}`,
    price: `₺${1600 + i * 140}`,
    slug: `kategori-urun-${i + 1}`
  }));

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Kategori</p>
          <h1 className="font-display text-3xl">Outerwear</h1>
        </div>
        <div className="flex gap-3 text-sm text-slate-600">
          <button className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-900">Fiyat</button>
          <button className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-900">Beden</button>
          <button className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-900">Renk</button>
        </div>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group space-y-3 rounded-3xl border border-slate-100 p-3 hover:border-slate-900">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-white to-slate-100 transition duration-500 group-hover:scale-[1.02]" />
            <div className="flex items-center justify-between text-sm">
              <p className="font-medium text-slate-900">{product.title}</p>
              <span className="text-slate-500">{product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
