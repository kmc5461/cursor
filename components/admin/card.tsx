export function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="card p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}
