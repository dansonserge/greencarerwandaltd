export interface User {
  id: number;
  email: string;
  name: string;
  isAdmin: number;
  status: number;
  createdAt: string; // ISO string format, or Date if you prefer Date objects
  updatedAt: string; // ISO string format, or Date if you prefer Date objects
}

export interface UserResponse {
  token: string;
  user: User;
}