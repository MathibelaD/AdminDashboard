'use client'

import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-lg text-black">
            {/* Notification icon */}
            <div className="mr-auto">
                {/* Insert your notification icon here */}
            </div>
            {/* User avatar and dropdown */}
            <div className="flex items-center">
                {/* User avatar */}
                <img src="https://avatars.githubusercontent.com/u/92311415?v=4" alt="User Avatar" className="w-8 h-8 border rounded-full mr-2" />
                {/* Dropdown menu */}
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                        <span className="mr-2">Ms mathibela</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 6.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 8.586V2a1 1 0 1 1 2 0v6.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {isOpen && <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                        <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Admin Profile</button>
                        <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Sign Out</button>
                    </div>}
                </div>
            </div>
        </header>
    );
};
