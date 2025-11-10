import { useContext } from 'react';
import { DarkModeContext } from '@/providers/DarkModeContext';

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 flex items-center justify-center w-10 h-10 text-white bg-gray-800 dark:bg-gray-500 rounded-md hover:bg-gray-700 dark:hover:bg-gray-400"
    >
      {isDarkMode ? (
        // Dark mode icon
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
        // Light mode icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10 3a7 7 0 00-7 7c0 2.7 1.6 5.1 4 6.2v3.8h2V16.2c2.4-1.1 4-3.5 4-6.2a7 7 0 00-7-7zm0 12.9V19a1 1 0 01-1-1h2a1 1 0 01-1 1zM9 14h2v-2H9v2zm2-9V4a1 1 0 012 0v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V7H9a1 1 0 010-2h1V4a1 1 0 011-1zm-1.5 7.086l-3.793-3.793-1.414 1.414 4.5 4.5a1 1 0 001.415 0l4.5-4.5-1.414-1.414-3.793 3.793V4h-2v8.086z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeButton;

