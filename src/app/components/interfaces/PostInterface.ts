export interface User {
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  userId: number;
  status: number;
  user: User;
  slug: string;
}

export interface PostsResponse {
  status: number;
  message: string;
  data: Post[];
}