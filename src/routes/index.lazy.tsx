import { Button } from '@/components/ui/button';
import supabase from '@/configs/supabase';
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  supabase.auth.getUser().then((res) => console.log(res.data.user));

  return (
    <section className="max-w-7xl mx-auto min-w-[900px] mt-10">
      <nav>
        <Link to="/auth">
          <Button>Auth</Button>
        </Link>
      </nav>
    </section>
  );
}
