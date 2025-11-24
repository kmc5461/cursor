import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ProductCard } from '../../../components/ProductCard';

const filtered = Array.from({ length: 4 }).map((_, idx) => ({
  slug: `category-product-${idx + 1}`,
  title: `Kategori Ürünü ${idx + 1}`,
  price: '₺3.900',
  image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80'
}));

export default function CategoryPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Kategori</p>
          <h1 className="text-3xl font-display">Outerwear</h1>
          <p className="text-neutral-600 max-w-2xl">Su geçirmez kumaşlar, teknik dikişler ve AI fiyat optimizasyonuyla hazırlanan koleksiyon.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ProductCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
