import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <main className="flex min-h-screen w-full">
      <Outlet />
    </main>
  ),
});
