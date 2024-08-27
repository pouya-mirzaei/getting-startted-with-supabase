import { Button } from '@/components/ui/button';
import supabase from '@/configs/supabase';
import { isUserLoggedIn } from '@/utils/auth';
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/_protectedRoutes/dashboard')({
  beforeLoad: async ({ location }) => {
    const status = await isUserLoggedIn();

    if (!status) {
      throw redirect({
        to: '/auth',
        search: {
          redirect: location.href + '/dashboard',
        },
      });
    }
  },

  component: () => <Dashboard />,
});

type User = {
  avatar_url: string | null;
  created_at: string;
  display_name: string | null;
  email: string;
  id: string;
  role: string;
};

function Dashboard() {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.log(error);
        return;
      }

      const { data } = await supabase.from('profiles').select('*').eq('id', `${user?.id}`).single();
      if (data) setUser(data);
      setLoading(false);
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    navigate({ to: '/auth' });
  };

  if (loading)
    return (
      <>
        <h1>We are loading your fucking date ...</h1>
      </>
    );

  return (
    <div>
      <div>Hello /dashboard!</div>
      <div className="flex items-center justify-between">
        <div>hello {user?.display_name}</div>

        <img src={user?.avatar_url || ''} alt={user?.display_name || ''} className="w-12 h-12 rounded-full ring-2 ring-primary" />
      </div>

      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  );
}
