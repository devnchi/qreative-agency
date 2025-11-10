// components/Footer.jsx
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useMediaQuery } from '@react-hook/media-query';

interface FooterProps {
    isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [isMounted, setIsMounted] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 640px)');

    useEffect(() => {
        setIsMounted(true);
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);

    const textColor = isDarkMode ? "text-white" : "text-black";
    const borderColor = isDarkMode ? "border-white" : "border-black";
    const hoverBorderColor = isDarkMode ? "hover:border-orange-300" : "hover:border-red-400";

    // Don't render until mounted to avoid hydration issues with useMediaQuery
    if (!isMounted) {
        return (
            <div className="font-mono sticky mx-auto">
                <div className="p-6">
                    <div className="animate-pulse">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="font-mono sticky mx-auto">
            <div className={`md:block sm:pt-10 p-6 lg:fixed bottom-0 left-0 md:flex lg:h-48 w-full items-end justify-between text-left ${
                isDarkMode ? 'dark:text-white' : 'text-black'
            }`}>
                <div className="flex items-center justify-center sm:justify-start lg:space-x-4">
                    <Link
                        className="pointer-events-none flex lg:gap-2 p-4 lg:pointer-events-auto lg:p-0"
                        href="/"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/qa-type.png"
                            alt="Qreative Agency Logo"
                            width={isSmallScreen ? 220 : 250}
                            height={24}
                            className="sm:mx-auto lg:ml-12"
                            priority
                        />
                    </Link>
                    {/* <a 
                        href="https://youtube.com/@shotbymurktsg3411" 
                        className={`${textColor} hover:text-orange-400 md:hidden lg:flex`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className={`sm:h-6 sm:w-6 lg:h-6 lg:w-6 rounded-xl border-2 p-1 ${borderColor} ${hoverBorderColor}`} />
                    </a>
                    <a 
                        href="https://instagram.com/murk_tsg?igshid=OGQ5ZDc2ODk2ZA==" 
                        className={`${textColor} hover:text-orange-400 md:hidden lg:flex`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className={`sm:h-6 sm:w-6 lg:h-6 lg:w-6 rounded-xl border-2 p-1 ${borderColor} ${hoverBorderColor}`} />
                    </a>
                    <a 
                        href="https://twitter.com/ShotByMurkTSG" 
                        className={`${textColor} hover:text-orange-400 md:hidden lg:flex`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className={`sm:h-6 sm:w-6 lg:h-6 lg:w-6 rounded-xl border-2 p-1 ${borderColor} ${hoverBorderColor}`} />
                    </a> */}
                </div>
                <div className={`text-xs lg:p-3 relative sm:text-center md:text-right md:pb-7 lg:text-right ${textColor}`}>
                    <Fragment>
                        <p>{`© ${year} qreative agency and the Qreative Agency Logo are trademarks of Qreative, Inc.`}</p>
                    </Fragment>
                </div>
            </div>
        </div>
    );
};

export default Footer;