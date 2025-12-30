import axios from 'axios';

import type { UserData } from '../types/User';

export const getUserData = async (search?: string): Promise<UserData[]> => {
  const response = await axios.get('https://dummyjson.com/users/search?q=' + search);
  return response.data.users;
};
