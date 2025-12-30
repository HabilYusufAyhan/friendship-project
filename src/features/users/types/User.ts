export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  address: {
    city: string;
    state: string;
    country: string;
  };
  university: string;
  company: {
    department: string;
    title: string;
  };
}
