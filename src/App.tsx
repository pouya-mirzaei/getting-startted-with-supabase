import { ThemeProvider } from './components/theme-provider';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Button>Hello world</Button>
    </ThemeProvider>
  );
}
