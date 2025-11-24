import { products } from '../../../lib/data'

export default function InventoryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Inventory</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3">Ürün</th>
              <th className="px-4 py-3">Varyant</th>
              <th className="px-4 py-3">Stok</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <tr key={product.slug} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">{product.name}</td>
                <td className="px-4 py-3 text-gray-600">{Object.keys(product.variants).join(', ')}</td>
                <td className="px-4 py-3 text-gray-600">50</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
