// components/Header.tsx
import { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onDarkModeToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      {/* Logo */}
      <div>
        <Image
          src="/qa-logo.png"
          alt="Qreative Agency Logo"
          width={120}
          height={40}
        />
      </div>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={onDarkModeToggle}
        className="px-4 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-gray-500 rounded-md hover:bg-gray-700 dark:hover:bg-gray-400"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
