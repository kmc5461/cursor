import Link from "next/link";

const sections = [
  { title: "Siparişlerim", href: "/account/orders" },
  { title: "Favorilerim", href: "/account/favorites" },
  { title: "Adreslerim", href: "/account/addresses" },
  { title: "Hesap Ayarları", href: "/account/settings" }
];

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-16">
      <h1 className="font-display text-3xl">Hesabım</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-slate-900">
            <p className="text-lg font-medium text-slate-900">{section.title}</p>
            <p className="text-sm text-slate-500">Hızlı erişim</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
