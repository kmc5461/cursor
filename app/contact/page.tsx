export default function ContactPage() {
  return (
    <div className="container-smooth py-16 grid md:grid-cols-2 gap-12">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">İletişim</p>
        <h1 className="text-3xl font-semibold">Bize ulaşın</h1>
        <p className="text-gray-600">Sorularınız ve iş birlikleri için ekibimizle iletişime geçin.</p>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Adres:</strong> Bağdat Caddesi No:123 İstanbul</p>
          <p><strong>Telefon:</strong> +90 212 000 00 00</p>
          <p><strong>E-posta:</strong> destek@kleidermafia.co</p>
          <p><strong>Çalışma Saatleri:</strong> Hafta içi 10:00 - 19:00</p>
          <a className="text-black underline" href="https://wa.me/905555555555">WhatsApp ile yazın</a>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-soft h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.810408387195!2d29.030!3d41.044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAyJzM4LjQiTiAyOcKwMDEnNDguOCJF!5e0!3m2!1str!2str!4v1614266877358!5m2!1str!2str"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
      <form className="card p-6 space-y-4">
        <h3 className="text-xl font-semibold">Mesaj Gönder</h3>
        <div className="space-y-1">
          <label className="text-sm text-gray-600">İsim</label>
          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="İsminiz" />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-600">E-posta</label>
          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="mail@example.com" />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Mesaj</label>
          <textarea className="w-full border rounded-lg px-3 py-2 text-sm" rows={4} placeholder="Mesajınız" />
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg text-sm">Gönder</button>
      </form>
    </div>
  )
}
