export interface UserData {
  id: number;
  name: string;
  email: string;
  username: string;
  phone?: string;
  website?: string;
  online: boolean;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}