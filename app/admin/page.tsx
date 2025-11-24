import { Card } from '../../components/admin/card'
import { orders } from '../../components/admin/mock'

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Toplam Ciro" value="₺ 240.000" />
        <Card title="Sipariş" value="1.240" />
        <Card title="Aktif Ürün" value="120" />
      </div>
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Son Siparişler</h2>
        </div>
        <div className="divide-y text-sm">
          {orders.map((order) => (
            <div key={order.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-semibold">{order.customer}</p>
                <p className="text-gray-500">{order.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-700">{order.total}</span>
                <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
