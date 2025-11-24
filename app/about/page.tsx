import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Hakkımızda</p>
          <h1 className="text-3xl font-display">Kusursuz form ve sorumlu üretim.</h1>
          <p className="text-neutral-600">
            KleiderMafia esintili bu platform, sürdürülebilir materyallerle hazırlanan premium koleksiyonları AI destekli alışveriş deneyimiyle birleştirir. Çok dilli içerik, varyant bazlı stok yönetimi, otomatik SEO üretimi ve global lojistik entegrasyonlarıyla ölçeklenebilir bir altyapı sunar.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
