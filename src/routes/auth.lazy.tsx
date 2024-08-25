import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth')({
  component: () => <Button>Hello world</Button>,
});
