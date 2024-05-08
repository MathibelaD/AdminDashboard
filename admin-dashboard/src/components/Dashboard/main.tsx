'use client'
import React, { useState } from 'react';
import DashboardContent from './content';
import { SettingsContent } from './settings';
import { SideNav } from './sideNavigation';


export const Dashboard = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('dashboard');

    const handleNavItemClick = (item: any) => {
        setSelectedNavItem(item);
    };

    const renderContent = () => {
        switch (selectedNavItem) {
            case 'dashboard':
                return <DashboardContent />;
            case 'settings':
                return <SettingsContent />;
            default:
                return null;
        }
    };

    return (
        <div className="flex">
            <SideNav selectedNavItem={selectedNavItem} handleNavItemClick={handleNavItemClick} />
            <div className="flex-1">
                {renderContent()}
            </div>
        </div>
    );
};
