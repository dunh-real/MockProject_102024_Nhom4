export interface AccountData {
  name: string;
  birth_date: string;
  email: string;
  phone_number: string;
  role_id: string;
  avatar: File | null;
  username?: string;
  password?: string;
}
