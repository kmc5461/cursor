import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard';

const products = Array.from({ length: 6 }).map((_, idx) => ({
  slug: `product-${idx + 1}`,
  title: `Minimal Piece ${idx + 1}`,
  price: '₺4.200',
  image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
}));

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Koleksiyon</p>
            <h1 className="text-3xl font-display">Tüm Ürünler</h1>
          </div>
          <div className="flex gap-3 text-sm">
            <button className="px-4 py-2 rounded-full border border-neutral-200">Filtre</button>
            <button className="px-4 py-2 rounded-full border border-neutral-200">Sıralama</button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
