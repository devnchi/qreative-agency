import "@/styles/globals.css";
import { DarkModeProvider } from '@/providers/DarkModeContext';
import { AppProps } from 'next/app';

<link rel="icon" href="/qa-icon.png" sizes="any" />


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;

