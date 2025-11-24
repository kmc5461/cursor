export default function AboutPage() {
  return (
    <div className="container-smooth py-16 space-y-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Hakkımızda</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Zamansız tasarım, şeffaf üretim.</h1>
          <p className="text-gray-600 leading-relaxed">
            KleiderMafia, minimal estetiği yüksek kalite üretimle birleştirir. Avrupa tedarik zinciri, sürdürülebilir
            materyaller ve adil üretim standartlarıyla çağdaş gardıroplar için uzun ömürlü parçalar sunar.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-soft h-80 bg-[url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Misyon',
            text: 'Kaliteyi, etik üretimi ve zamansız tasarımı tek bir çizgide buluşturmak.'
          },
          {
            title: 'Vizyon',
            text: 'Sürdürülebilir moda anlayışını şehirli stile uyarlayarak yeni nesil standartlar yaratmak.'
          },
          {
            title: 'Değerler',
            text: 'Şeffaflık, sorumluluk ve yalın tasarım ilkeleriyle hareket etmek.'
          }
        ].map((item) => (
          <div key={item.title} className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{item.title}</p>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
