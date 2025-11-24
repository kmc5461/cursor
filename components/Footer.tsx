export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50/60">
      <div className="container-wide py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-neutral-600">
        <div>
          <p className="font-display text-neutral-900">KleiderMafia Studio</p>
          <p className="text-neutral-500">Minimal premium koleksiyonlar, global teslimat.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="underline hover:text-brand-600">KVKK</a>
          <a href="#" className="underline hover:text-brand-600">Gizlilik</a>
          <a href="#" className="underline hover:text-brand-600">İade</a>
        </div>
        <p className="text-neutral-500">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
