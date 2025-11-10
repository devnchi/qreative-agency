import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isDarkMode, onDarkModeToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-transparent">
      {/* Logo */}
      <div className="">
        <Link href="/">
          <Image
            src="/qa-icon.png"
            alt="Qreative Agency Logo"
            width={150}
            height={40}
            className="p-3 animate-bounce"
          />
        </Link>
      </div>
      {/* Hamburger Menu for Small and Medium Screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className={`${
            isDarkMode ? 'text-white' : 'text-black'
          } dark:text-white focus:outline-none`}>
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Nav Links and Dark Mode Toggle */}
      <ul className={`sm:space-x-4 lg:flex ${isOpen ? 'flex' : 'hidden'} lg:items-center lg:space-x-8 lg:p-0 lg:w-auto`}>
        <li>
          <Link href="/who-we-are" className={`p-1 text-xs sm:text-sm lg:text-lg hover:text-orange-300 font-mono font-bold ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            WHO WE ARE
          </Link>
        </li>
        <li>
          <Link href="/our-services" className={`p-1 text-xs lg:text-lg hover:text-orange-300 font-mono font-bold ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            OUR SERVICES
          </Link>
        </li>
        <li>
          <Link href="/our-work" className={`p-1 text-xs lg:text-lg hover:text-orange-300 font-mono font-bold ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            OUR WORK
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className={`p-1 text-xs lg:text-lg hover:text-orange-300 font-mono font-bold ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            CONTACT US
          </Link>
        </li>
        {/* Dark Mode Toggle Button */}
        <li>
          <button
            onClick={onDarkModeToggle}
            className="flex items-center justify-center w-8 h-8 text-white bg-transparent dark:bg-orange-500 rounded-md hover:bg-orange-400 dark:hover:bg-orange-400"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
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
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 00-7 7c0 2.7 1.6 5.1 4 6.2v3.8h2V16.2c2.4-1.1 4-3.5 4-6.2a7 7 0 00-7-7zm0 12.9V19a1 1 0 01-1-1h2a1 1 0 01-1 1zM9 14h2v-2H9v2zm2-9V4a1 1 0 012 0v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V7H9a1 1 0 010-2h1V4a1 1 0 011-1zm-1.5 7.086l-3.793-3.793-1.414 1.414 4.5 4.5a1 1 0 001.415 0l4.5-4.5-1.414-1.414-3.793 3.793V4h-2v8.086z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;