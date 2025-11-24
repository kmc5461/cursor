import Link from 'next/link';

const cards = [
  { title: 'Son Siparişler', value: '128', hint: '24 saat' },
  { title: 'Aylık Ciro', value: '₺2.4M', hint: 'AI tahmin +12%' },
  { title: 'Sadakat Puanı', value: '18.2K', hint: 'Aktif üyeler' },
  { title: 'Depo Stoku', value: '92%', hint: 'Backorder izleme' }
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-neutral-900 border-r border-neutral-800 p-6 space-y-6">
          <p className="text-lg font-semibold">TechUI Panel</p>
          <nav className="space-y-3 text-sm text-neutral-300">
            <Link href="/admin" className="block hover:text-white">Dashboard</Link>
            <Link href="/admin/products" className="block hover:text-white">Ürünler</Link>
            <Link href="/admin/warehouse" className="block hover:text-white">Depo</Link>
            <Link href="/admin/shipments" className="block hover:text-white">Kargo</Link>
            <Link href="/admin/finance" className="block hover:text-white">Finans</Link>
            <Link href="/admin/campaigns" className="block hover:text-white">Kampanya</Link>
            <Link href="/admin/influencers" className="block hover:text-white">Influencer</Link>
            <Link href="/admin/blog" className="block hover:text-white">Blog</Link>
            <Link href="/admin/lookbook" className="block hover:text-white">Lookbook</Link>
            <Link href="/admin/users" className="block hover:text-white">Kullanıcılar</Link>
          </nav>
        </aside>
        <section className="flex-1 p-10 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Dashboard</p>
              <h1 className="text-3xl font-display">Operasyon Özeti</h1>
            </div>
            <button className="px-4 py-2 rounded-full bg-white text-neutral-900">Yeni Ürün</button>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {cards.map((card) => (
              <div key={card.title} className="card-dark p-5 space-y-2">
                <p className="text-sm text-neutral-400">{card.title}</p>
                <p className="text-2xl font-display">{card.value}</p>
                <p className="text-xs text-neutral-500">{card.hint}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card-dark p-6 h-64">Satış grafiği (Chart.js için placeholder)</div>
            <div className="card-dark p-6 h-64">Kargo durumları (API placeholder)</div>
          </div>
        </section>
      </div>
    </main>
  );
}
