// components/users/UsersEmpty.tsx
import { Users } from 'lucide-react';

export const UsersEmpty = () => (
  <tr>
    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
      <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
      <p className="text-lg font-semibold">Kullanıcı bulunamadı</p>
      <p className="text-sm">Arama kriterlerinizi değiştirin</p>
    </td>
  </tr>
);
