import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const gallery = Array.from({ length: 6 }).map((_, idx) => `https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=${80 + idx}`);

export default function LookbookPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Lookbook</p>
          <h1 className="text-3xl font-display">Sezon hikayeleri</h1>
          <p className="text-neutral-600 max-w-2xl">TechUI uyumlu admin panelden yönetilen tam ekran görsel vitrin.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-[24px] shadow-soft">
              <img src={src} alt={`Lookbook ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
