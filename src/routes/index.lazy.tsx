import { Button } from '@/components/ui/button';
import supabase from '@/configs/supabase';
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <section>
      <nav>
        <h1 className="text-primary">Hello world</h1>
      </nav>
    </section>
  );
}
