import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">İletişim</p>
          <h1 className="text-3xl font-display">Stüdyo ile bağlantı kurun</h1>
          <p className="text-neutral-600">WhatsApp destek hattı, e-posta ve fiziksel showroom adresi ile hızlıca erişin.</p>
          <div className="rounded-2xl overflow-hidden border border-neutral-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12098.214!2d29.004!3d41.039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDEuMDM5LCAtMjkuMDA0"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/900000000000" className="px-4 py-3 rounded-full bg-green-600 text-white">WhatsApp</a>
            <a href="mailto:studio@kleidermafia.com" className="px-4 py-3 rounded-full border border-neutral-200">E-posta</a>
          </div>
        </div>
        <div className="card p-6 space-y-4">
          <h2 className="text-xl font-display">Bize yazın</h2>
          <input className="w-full rounded-xl border border-neutral-200 px-4 py-3" placeholder="Adınız" />
          <input className="w-full rounded-xl border border-neutral-200 px-4 py-3" placeholder="E-posta" />
          <textarea className="w-full rounded-xl border border-neutral-200 px-4 py-3" rows={4} placeholder="Mesajınız" />
          <button className="w-full px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Gönder</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
