import Link from 'next/link'
import { orders } from '../../../components/admin/mock'

export default function OrdersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Orders</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3">Müşteri</th>
              <th className="px-4 py-3">Tarih</th>
              <th className="px-4 py-3">Tutar</th>
              <th className="px-4 py-3">Durum</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Link href={`/admin/orders/${order.id}`} className="font-semibold text-gray-900">
                    {order.customer}
                  </Link>
                </td>
                <td className="px-4 py-3 text-gray-600">{order.date}</td>
                <td className="px-4 py-3 text-gray-600">{order.total}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
