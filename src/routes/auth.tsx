import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { HiOutlineKey } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import supabase from '@/configs/supabase';
import { isUserLoggedIn } from '@/utils/auth';

export const Route = createFileRoute('/auth')({
  beforeLoad: async () => {
    const status = await isUserLoggedIn();

    if (status) {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
  component: Auth,
});

function Auth() {
  const handleLogin = async (provider: 'google' | 'github') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  };

  return (
    <div className="flex w-full h-[calc(100vh-53px)] flex-col items-center justify-center relative">
      <div className="w-96">
        <Card className="w-full relative z-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-1">
              <HiOutlineKey className="inline-block w-10 h-10 text-primary" />
              <span className="text-base">Sign up/in into the app</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-sm text-foreground mb-5 inline-block">
              Sign in with one of the following providers to start using the app:
            </span>
            <div className="flex flex-col gap-2">
              <Button variant="secondary" className="flex items-center gap-2" onClick={() => handleLogin('google')}>
                <FcGoogle />
                Google
              </Button>
              <Button variant="secondary" className="flex items-center gap-2" onClick={() => handleLogin('github')}>
                <FaGithub />
                Github
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="glow-box"></div>
      </div>
    </div>
  );
}
