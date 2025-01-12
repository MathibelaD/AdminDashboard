'use client'
import React, { useState } from 'react';
import { 
  Home,
  ChefHat,
  Users,
  Bell,
  UserCog,
  Settings,
  BarChart2,
  Menu as MenuIcon,
  Calendar,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Menu Management', href: '/dashboard/menus', icon: ChefHat },
    { name: 'Orders', href: '/dashboard/orders', icon: DollarSign },
    { name: 'Inventory', href: '/dashboard/inventory', icon: Calendar },
    { name: 'Reviews', href: '/dashboard/reviews', icon: Users },
    { name: 'Staff', href: '/dashboard/staff', icon: UserCog },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
    { name: 'Announcements', href: '/dashboard/announcements', icon: Bell },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Kota Admin</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <MenuIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors duration-150 
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                {!isCollapsed && (
                  <span className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
                    {link.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <UserCog className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">admin@kotarestaurant.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;