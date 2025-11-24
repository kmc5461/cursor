import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

export default function AccountPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="section container-wide space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Kullanıcı Paneli</p>
          <h1 className="text-3xl font-display">Hesap</h1>
        </div>
        <div className="card p-6 space-y-2">
          <p className="text-neutral-600">Bu alan gelecekte ilgili modül için ayrılmıştır.</p>
          <p className="text-neutral-500 text-sm">Siparişler, favoriler, adresler, güvenlik, kuponlar ve sadakat puanı yönetimi için hazır yapı.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
