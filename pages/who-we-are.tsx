import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function WhoWeArePage() {
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
    
        {/* Description paragraph on the right */}
        <div className={`max-w-3xl sm:p-10 md:p-10 lg:p-16 font-mono text-gray-800 dark:text-white ${
        isDarkMode ? "text-white" : ""
      }`}>
          <h1 className="text-xl text-center lg:text-left lg:text-4xl font-bold mb-8">WHO ARE WE?</h1>
          <p className="text-md text-center lg:text-left lg:text-lg">
            Qreative Agency is an independent creative technology studio founded in New York City in 2015. What began as a college-born brand and advertising studio has evolved into a modern venture studio specializing in software, AI, and product innovation. <br />
            <br />

            We partner with visionaries—from emerging founders to established enterprises—to design, build, and scale transformative digital experiences. Every project is led by our founder, a multidisciplinary “unicorn” designer–developer, who curates specialized teams to meet each project’s scale and ambition.<br></br>
            <br />

            We take on only a select number of clients each year to preserve the integrity, creativity, and craftsmanship that define our work. Beyond building products, we invest in and take fractional ownership of the ventures we believe in—turning ideas into living, evolving ecosystems of value and impact.<br></br>
          </p>
          {/* Add more text content as needed */}
        </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}