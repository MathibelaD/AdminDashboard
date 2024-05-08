'use client'
import React from 'react';

export const SideNav = ({ selectedNavItem, handleNavItemClick }: any) => {
    return (
        <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
            <div className="py-4 px-6 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Navigation</h2>
            </div>
            <ul className="py-4 px-6 flex-1">
                <li className={`cursor-pointer py-2 px-4 hover:bg-gray-700 ${selectedNavItem === 'dashboard' ? 'bg-gray-700' : ''}`} onClick={() => handleNavItemClick('dashboard')}>Dashboard</li>
                <li className={`cursor-pointer py-2 px-4 hover:bg-gray-700 ${selectedNavItem === 'settings' ? 'bg-gray-700' : ''}`} onClick={() => handleNavItemClick('settings')}>Settings</li>
            </ul>
        </div>
    );
};
