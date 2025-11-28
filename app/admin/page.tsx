import Link from "next/link";

const metrics = [
  { label: "Toplam Satış", value: "₺1.2M" },
  { label: "Aylık Ciro", value: "₺240K" },
  { label: "Günlük Sipariş", value: "320" },
  { label: "Sadakat Puanları", value: "245K" }
];

const quickLinks = [
  { label: "Ürünler", href: "/admin/products" },
  { label: "Depolar", href: "/admin/warehouses" },
  { label: "Kargolar", href: "/admin/shipments" },
  { label: "Finans", href: "/admin/reports" }
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="flex">
        <aside className="hidden w-64 border-r border-slate-800 bg-slate-900/50 p-6 lg:block">
          <div className="text-xl font-semibold">TechUI Admin</div>
          <nav className="mt-8 space-y-3 text-sm text-slate-200">
            <Link href="/admin" className="block rounded-lg bg-slate-800 px-4 py-2">Dashboard</Link>
            <Link href="/admin/products" className="block rounded-lg px-4 py-2 hover:bg-slate-800">Ürün Yönetimi</Link>
            <Link href="/admin/orders" className="block rounded-lg px-4 py-2 hover:bg-slate-800">Siparişler</Link>
            <Link href="/admin/reports" className="block rounded-lg px-4 py-2 hover:bg-slate-800">Finans</Link>
          </nav>
        </aside>
        <div className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-6 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Dashboard</p>
              <h1 className="text-2xl font-semibold">Genel Bakış</h1>
            </div>
            <div className="flex gap-3 text-sm">
              <button className="rounded-full border border-slate-700 px-4 py-2">Light</button>
              <button className="rounded-full bg-slate-100 px-4 py-2 text-slate-900">Dark</button>
            </div>
          </header>
          <main className="space-y-8 px-6 py-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Aylık satış grafiği</p>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">Chart.js placeholder</span>
                </div>
                <div className="mt-6 h-64 rounded-xl bg-slate-800/60" />
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-sm text-slate-400">Son Siparişler</p>
                <div className="mt-4 space-y-3 text-sm">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-3">
                      <div>
                        <p className="font-medium text-white">#SO-{1200 + i}</p>
                        <span className="text-slate-400">Hazırlanıyor</span>
                      </div>
                      <span className="text-slate-200">₺{3200 + i * 150}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm transition hover:border-slate-600">
                  <p className="text-slate-300">{link.label}</p>
                  <span className="text-xs text-slate-500">Yönet</span>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
