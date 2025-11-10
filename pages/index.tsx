import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { useMediaQuery } from '@react-hook/media-query';

const inter = Inter({ subsets: ["latin"] });

interface DarkModeButtonProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({
  isDarkMode,
  onDarkModeToggle,
}) => {
  return (
    <button
      onClick={onDarkModeToggle}
      className="fixed top-4 right-4 z-50 flex items-center justify-center w-10 h-10 text-white bg-transparent dark:bg-transparent rounded-md hover:bg-orange-400 dark:hover:bg-orange-400 dark:invert"
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10 3a7 7 0 100 14h7a1 1 0 010 2H3a1 1 0 010-2h7a7 7 0 000-14z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10 3a7 7 0 00-7 7c0 2.7 1.6 5.1 4 6.2v3.8h2V16.2c2.4-1.1 4-3.5 4-6.2a7 7 0 00-7-7zm0 12.9V19a1 1 0 01-1-1h2a1 1 0 01-1 1zM9 14h2v-2H9v2zm2-9V4a1 1 0 012 0v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V7H9a1 1 0 010-2h1V4a1 1 0 011-1zm-1.5 7.086l-3.793-3.793-1.414 1.414l4.5 4.5a1 1 0 001.415 0l4.5-4.5-1.414-1.414-3.793 3.793V4h-2v8.086z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [gifBackgroundUrl, setGifBackgroundUrl] = useState<string>("/cotton-candy-clouds.gif");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check system preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Change the background image based on dark mode
    if (isDarkMode) {
      setGifBackgroundUrl("/dark-clouds.gif");
    } else {
      setGifBackgroundUrl("/cotton-candy-clouds.gif");
    }
  }, [isDarkMode, isMounted]);

  // Define isSmallScreen using useMediaQuery hook - only on client
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  // Don't render background until mounted to avoid hydration mismatch
  const backgroundStyle = isMounted ? {
    backgroundImage: `url(${gifBackgroundUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } : {};

  if (!isMounted) {
    return (
      <main className={`flex min-h-screen flex-col items-center justify-center p-8 ${inter.className} bg-white`}>
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  return (
    <main
      className={`overflow-x-hidden flex min-h-screen max-w-screen flex-col items-center justify-center p-8 ${inter.className} ${
        isDarkMode ? "dark:bg-white" : "bg-white"
      }`}
      style={backgroundStyle}
    >
      {/* Dark Mode Button */}
      <DarkModeButton
        isDarkMode={isDarkMode}
        onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Logo */}
      <div className="p-6 mt-12 relative flex before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative p-3 dark:drop-shadow-[0_0_0.3rem_#ffffff70] animate-bounce"
          src="/qa-icon.png"
          alt="Qreative Agency Logo Icon"
          width={isSmallScreen ? 290 : 360}
          height={36}
          priority
        />
      </div>

      {/* Link Grid */}
      <div className={`p-3 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left place-items-center justify-center relative z-10 pointer-events-auto ${
        isDarkMode ? "text-white" : ""
      }`}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <Link
          href="/who-we-are"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-orange-400 relative z-20"
        >
          <h2 className={`sm:text-xl m-2 lg:text-2xl font-mono font-bold`}>
            WHO WE ARE
          </h2>
        </Link>

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <Link
          href="/our-services"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-orange-400 relative z-20"
        >
          <h2 className={`sm:text-xl m-2 lg:text-2xl font-mono font-bold`}>
            OUR SERVICES
          </h2>
        </Link>

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <Link
          href="/our-work"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-orange-400 relative z-20"
        >
          <h2 className={`sm:text-xl m-2 lg:text-2xl font-mono font-bold`}>
            OUR WORK
          </h2>
        </Link>

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <Link
          href="/contact-us"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-orange-400 relative z-20"
        >
          <h2 className={`sm:text-xl m-2 lg:text-2xl font-mono font-bold`}>
            CONTACT US
          </h2>
        </Link>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}