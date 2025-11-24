import Link from "next/link";
import { motion } from "framer-motion";

const heroImages = ["/hero-1.jpg", "/hero-2.jpg"];
const newArrivals = [
  { title: "Signature Blazer", price: "₺3200", image: "/product-1.jpg" },
  { title: "Silk Midi Dress", price: "₺2800", image: "/product-2.jpg" },
  { title: "Wool Coat", price: "₺4100", image: "/product-3.jpg" },
  { title: "Minimal Sneaker", price: "₺1900", image: "/product-4.jpg" }
];

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16 pb-20">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight">Maison.</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/products" className="hover:underline">Shop</Link>
            <Link href="/lookbook" className="hover:underline">Lookbook</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/account" className="hover:underline">Account</Link>
          </nav>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">New Season</p>
          <h1 className="font-display text-4xl leading-tight text-slate-900 lg:text-5xl">Minimal ve premium koleksiyon deneyimi.</h1>
          <p className="text-lg text-slate-600">KleiderMafia esintili, fotoğraf odaklı modern vitrin ile satış odaklı deneyim.</p>
          <div className="flex gap-4">
            <Link href="/products" className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">Yeni Gelenler</Link>
            <Link href="/lookbook" className="rounded-full border border-slate-300 px-6 py-3 text-slate-900 transition hover:border-slate-900">Lookbook</Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {heroImages.map((image, index) => (
            <motion.div key={image} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }} />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">Yeni Gelenler</h2>
          <Link href="/products" className="text-sm text-slate-600 hover:text-slate-900">Tümünü gör</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((item) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              <div className="overflow-hidden rounded-3xl bg-slate-100">
                <div className="aspect-[3/4] bg-gradient-to-br from-white to-slate-100 transition duration-500 hover:scale-[1.02]" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover" }} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="font-medium text-slate-900">{item.title}</p>
                <span className="text-slate-500">{item.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500">
        <div className="h-px bg-slate-200" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© 2024 Maison. Premium Commerce.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-900">KVKK</Link>
            <Link href="/contact" className="hover:text-slate-900">İletişim</Link>
            <Link href="/admin" className="hover:text-slate-900">Admin</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
