// pages/Our-Services.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ServicesTable from "@/components/ServicesTable";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
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
      className={`flex min-h-screen flex-col p-20 mt-6 ${inter.className} ${isDarkMode ? 'dark:bg-white' : 'bg-white'}`}
      style={backgroundStyle}
    >
     <NavBar 
       isDarkMode={isDarkMode} 
       onDarkModeToggle={() => setIsDarkMode(!isDarkMode)} 
     />
    
        <div className="flex flex-wrap justify-center md:p-24 sm:p-6 font-mono mt-6">
            {/* Services table on the left */}
            <div className="w-full lg:w-3/5 lg:px-8 lg:py-12">
            <ServicesTable isDarkMode />
            </div>
            {/* Description on the right */}
            <div className={`max-w-xl w-full lg:w-2/6 px-8 py-12 text-gray-800 dark:text-white ${
        isDarkMode ? "text-white" : ""
      }`}>
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <p className="text-lg">
              We design brands, build software, and help founders bring ideas to life. From strategy and design to AI-powered development, Qreative Agency crafts products that are intelligent, beautiful, and built to last.
            </p>
            <br />
            {/* Add more text content as needed */}
            <div className="max-w-xl w-full dark:text-white text-md">
              <h2 className="text-2xl pb-2 font-bold">Our Pricing</h2>
              <p>Every project we take on is unique. Our pricing reflects the scope, scale, and creative depth required to bring each vision to life. We tailor every engagement to our clients’ specific goals, ensuring thoughtful collaboration, transparency, and lasting value. Our pricing is fully customized to your needs. Whether you’re building your first product or scaling your next big idea, we design flexible engagements that align with your goals, resources, and timeline. No two projects are alike—and neither are our partnerships. Reach out to us for a quote.</p>
              <br />   
              <p className="font-bold font-italic">For example:</p>
              <p>⭐ Brand & Product Strategy: “Starter” package for early founders could begin at $25,000–50,000 for a full brand + product vision + go-to-market plan (given your pedigree and location). 
                  <br />
                  <br />
                ⭐ Software & AI Development – MVP: Beginning ~$20,000–150,000 for a lean MVP, then escalating based on complexity/features/integrations. <br />
                  <br />
                  <br />
                ⭐ Software & AI Development – Growth/Scale: $75,000+ to $500,000+ depending on features, integrations, enterprise requirements. <br />
                  <br />
                  <br />
                ⭐ Retainer / Ongoing tech partnership: Monthly retainer of ~$3,000-30,000/month for ongoing software/AI support, product leadership, fractional CTO/tech team. <br />
                  <br />
                  <br />
                ⭐ Venture Studio / Equity Partnerships: Could involve minimal upfront fee + equity stake + revenue share. For example: Build fee of $X (say ~$100K) + 10-30% equity, or no upfront but lead investor and take higher equity. Or a model like 19-49% revenue-share as one firm cites.</p>
            </div>
            </div>


        </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}