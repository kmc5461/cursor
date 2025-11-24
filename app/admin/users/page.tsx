const users = [
  { id: 1, name: 'Ela Yılmaz', role: 'admin', email: 'ela@example.com' },
  { id: 2, name: 'Mert Aydın', role: 'user', email: 'mert@example.com' }
]

export default function UsersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Users</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3">İsim</th>
              <th className="px-4 py-3">Rol</th>
              <th className="px-4 py-3">E-posta</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">{user.name}</td>
                <td className="px-4 py-3 text-gray-600">{user.role}</td>
                <td className="px-4 py-3 text-gray-600">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
