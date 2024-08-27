import { Button } from '@/components/ui/button';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex  justify-between gap-3">
        <Link to="/">
          <Button variant="outline">Home</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="outline">Dashboard</Button>
        </Link>
      </div>
      <hr />
      <main className="min-h-[calc(100vh-53px)] max-w-7xl mx-auto min-w-[900px]">
        <Outlet />
      </main>
    </>
  ),
});
