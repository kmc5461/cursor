import Link from "next/link";

const products = Array.from({ length: 8 }).map((_, i) => ({
  title: `Ürün ${i + 1}`,
  price: `₺${1500 + i * 120}`,
  slug: `urun-${i + 1}`,
  image: `/product-${i + 1}.jpg`
}));

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Koleksiyon</h1>
        <div className="flex gap-3 text-sm text-slate-600">
          <button className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-900">Yeni</button>
          <button className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-900">Fiyat</button>
          <button className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-900">Popüler</button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group space-y-3">
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <div className="aspect-[3/4] bg-gradient-to-br from-white to-slate-100 transition duration-500 group-hover:scale-[1.03]" style={{ backgroundImage: `url(${product.image})`, backgroundSize: "cover" }} />
            </div>
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
