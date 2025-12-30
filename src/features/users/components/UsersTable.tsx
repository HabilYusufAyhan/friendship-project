// components/users/UsersTable.tsx

import type { UserData } from '../types/User';
import { UserRow } from './UserRow';
import { UsersEmpty } from './UsersEmpty';

interface Props {
  users: UserData[];
  onMeet: (id: number, name: string) => void;
  onSkip: (id: number) => void;
}

export const UsersTable = ({ users, onMeet, onSkip }: Props) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-linear-to-r from-purple-600 to-pink-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Kullanıcı</th>
            <th className="px-6 py-4 text-left">İletişim</th>
            <th className="px-6 py-4 text-left">Konum</th>
            <th className="px-6 py-4 text-left">Meslek</th>
            <th className="px-6 py-4 text-left">Fiziksel</th>
            <th className="px-6 py-4 text-center">İşlemler</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.length === 0 ? (
            <UsersEmpty />
          ) : (
            users.map((u) => <UserRow key={u.id} user={u} onMeet={onMeet} onSkip={onSkip} />)
          )}
        </tbody>
      </table>
    </div>
  </div>
);
