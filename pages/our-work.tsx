import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function OurWork() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [gifBackgroundUrl, setGifBackgroundUrl] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check system preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Change the background image based on dark mode
    if (isDarkMode) {
      setGifBackgroundUrl('/dark-clouds.gif');
    } else {
      setGifBackgroundUrl('/cotton-candy-clouds.gif');
    }
  }, [isDarkMode, isMounted]);

  // Only apply background after mounting to avoid hydration mismatch
  const backgroundStyle = isMounted ? { 
    backgroundImage: `url(${gifBackgroundUrl})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    zIndex: '-1' 
  } : {};

  // Show loading state during SSR
  if (!isMounted) {
    return (
      <main className={`flex min-h-screen flex-col p-24 ${inter.className} bg-white`}>
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  return (
    <main
      className={`flex min-h-screen flex-col p-24 ${inter.className} ${isDarkMode ? 'dark:bg-white' : 'bg-white'}`}
      style={backgroundStyle}
    >
     <NavBar 
       isDarkMode={isDarkMode} 
       onDarkModeToggle={() => setIsDarkMode(!isDarkMode)} 
     />
    
        {/* Description paragraph */}
        <div className={`max-w-3xl mx-auto px-8 py-12 text-gray-800 dark:text-white font-mono ${
        isDarkMode ? "text-white" : ""
      }`}>
          <h1 className="text-4xl font-bold mb-8">Our Work</h1>
          <p className="text-lg">
            Much of what we build lives behind closed doors in confidential builds, private launches, and ventures still in bloom. In 2026, we’ll be launching case studies and an official blog to share a few of our most loved projects and the stories behind them.
          </p>
          {/* Add more text content as needed */}
        </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}