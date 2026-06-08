import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>
      <div id="main-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}