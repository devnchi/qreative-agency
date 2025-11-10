// pages/contact-us.jsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import router from "next/router";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
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

  // Don't render background until we're on the client to avoid hydration mismatch
  const backgroundStyle = isMounted ? { 
    backgroundImage: `url(${gifBackgroundUrl})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    zIndex: '-1' 
  } : {};

  return (
    <main
      className={`flex min-h-screen flex-col p-24 ${inter.className} ${isDarkMode ? 'dark:bg-white' : 'bg-white'} `}
      style={backgroundStyle}
    >
     <NavBar 
       isDarkMode={isDarkMode} 
       onDarkModeToggle={() => setIsDarkMode(!isDarkMode)} 
     />
    
        <div className="flex flex-wrap justify-center md:p-12 sm:p-6 mt-6">
            {/* Description on the left */}
            <div className={`max-w-xl w-full lg:w-2/6 px-5 py-12 text-gray-800 dark:text-white ${
        isDarkMode ? "text-white" : ""
      }`}>
            <h1 className="text-4xl font-mono font-bold mb-8">Want to work with us?</h1>
            <p className="text-lg font-mono">
              We are a founder-led creative technology studio helping innovators design, build, and scale their next big idea. From brand to AI, we bring vision to life—one product at a time. We build what doesn’t yet exist or improve on what is working for you.
            </p>
            </div>
            {/* Services table on the right */}
            <div className="max-w-2xl w-full md:w-3/5 lg:ml-10 lg:m-6 lg:w-4/6">
            <ContactForm />
            </div>
        </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}