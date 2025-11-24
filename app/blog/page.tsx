import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Link from 'next/link';

const posts = [
  { slug: 'premium-fabrics', title: 'Premium kumaş rehberi', excerpt: 'Wool, cashmere ve teknik dokularla performans.' },
  { slug: 'ai-recommendations', title: 'AI öneri motoru', excerpt: 'Davranış bazlı önerilerle dönüşümü artırın.' }
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Blog</p>
          <h1 className="text-3xl font-display">Insight &amp; Stories</h1>
          <p className="text-neutral-600 max-w-2xl">SEO uyumlu, iki dilli içerik yönetimi için hazır modül.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 space-y-3 hover:-translate-y-1 transition-transform">
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">Yeni</p>
              <h3 className="text-xl font-display">{post.title}</h3>
              <p className="text-neutral-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
