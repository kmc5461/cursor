import { orders } from '../../../../components/admin/mock'
import { notFound } from 'next/navigation'

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = orders.find((o) => o.id === params.id)
  if (!order) return notFound()
  return (
    <div className="card p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Sipariş #{order.id}</h1>
      <p className="text-gray-700">Müşteri: {order.customer}</p>
      <p className="text-gray-700">Tutar: {order.total}</p>
      <p className="text-gray-700">Durum: {order.status}</p>
    </div>
  )
}
