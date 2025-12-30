import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { PageHeader } from '../components/PageHeader';
import { SearchBar } from '../components/SearchBar';
import { StatsGrid } from '../components/StatsGris';
import { UsersTable } from '../components/UsersTable';
import { useUsersQuery } from '../hooks/useUsersQuery';
import type { UserData } from '../types/User';

function User() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: users = [] } = useUsersQuery(searchQuery);
  const queryClient = useQueryClient();

  const handleMeet = (userId: number, userName: string) => {
    alert(`${userName} ile tanışma isteği gönderildi! 🎉`);

    queryClient.setQueryData(['users'], (oldData: UserData[] | undefined) => {
      if (!oldData) return oldData;
      return oldData.filter((user) => user.id !== userId);
    });
  };

  const handleSkip = (userId: number) => {
    queryClient.setQueryData(['users'], (oldData: UserData[] | undefined) => {
      if (!oldData) return oldData;
      return oldData.filter((user) => user.id !== userId);
    });
  };

  const filteredUsers = users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.company.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <PageHeader total={users.length} />

        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <UsersTable users={users} onMeet={handleMeet} onSkip={handleSkip} />

        {/* Stats */}
        {filteredUsers.length > 0 && <StatsGrid users={users} />}
      </main>
    </div>
  );
}

export default User;
