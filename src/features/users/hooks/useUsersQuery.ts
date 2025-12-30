import { useQuery } from '@tanstack/react-query';

import { getUserData } from '../service/userService';

export const useUsersQuery = (search: string) => {
  return useQuery({
    queryKey: ['users', search || ''],
    queryFn: () => getUserData(search),
    staleTime: 1000 * 60 * 5
  });
};
