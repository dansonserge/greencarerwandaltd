import { useState, useEffect } from "react";

// Define TypeScript types
type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  userId: number;
  status: number;
  user: {
    name: string;
    email: string;
  };
};

type PostsResponse = {
  status: number;
  message: string;
  data: Post[];
};

export const useFetchPosts = (autoFetch: boolean = true) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(autoFetch); // Set loading only if autoFetch is true
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/posts");
      const result: PostsResponse = await response.json();

      if (result.status === 200) {
        setPosts(result.data);
        setError(null);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch posts on mount if autoFetch is true
  useEffect(() => {
    if (autoFetch) {
      fetchPosts();
    }
  }, [autoFetch]);

  return { posts, loading, error, fetchPosts };
};