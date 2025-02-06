import { useMutation } from '@tanstack/react-query';

type LoginCredentials = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

const login  = async ({
  email,
  password,
}: {
     email: string;
  password: string;


})=> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email, password}),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

  return data;
};

const useLogin = () => {
/*   return useMutation(login({email, password}), {
    onSuccess: (data: any) => {
      console.log('Login successful:', data);
      alert(`Welcome, ${data.user.name}!`);
    },
    onError: (error:any) => {
      console.error('Login failed:', error.message);
      alert(`Error: ${error.message}`);
    },
  }); */
};

export default useLogin;
