'use client'
import React, { useState } from 'react';
import { 
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  AlertCircle,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Package,
  DollarSign,
  PieChart as PieChartIcon
} from 'lucide-react';

// Sample data - replace with your actual data
const inventoryData = [
  { id: 1, name: 'Bread Roll', category: 'Base', inStock: 150, minRequired: 100, costPerUnit: 8, lastRestocked: '2024-01-10' },
  { id: 2, name: 'French Fries', category: 'Sides', inStock: 80, minRequired: 100, costPerUnit: 15, lastRestocked: '2024-01-09' },
  { id: 3, name: 'Polony', category: 'Meats', inStock: 120, minRequired: 50, costPerUnit: 12, lastRestocked: '2024-01-11' },
  { id: 4, name: 'Cheese Slice', category: 'Dairy', inStock: 30, minRequired: 50, costPerUnit: 8, lastRestocked: '2024-01-08' },
];

const financeData = {
  sales: [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 48000 },
    { month: 'Apr', amount: 61000 },
    { month: 'May', amount: 55000 },
    { month: 'Jun', amount: 67000 }
  ],
  expenses: [
    { category: 'Ingredients', amount: 25000 },
    { category: 'Staff', amount: 15000 },
    { category: 'Utilities', amount: 5000 },
    { category: 'Rent', amount: 8000 },
    { category: 'Other', amount: 3000 }
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const InventoryFinance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  
  const lowStockItems = inventoryData.filter(item => item.inStock <= item.minRequired);
  const totalInventoryValue = inventoryData.reduce((sum, item) => sum + (item.inStock * item.costPerUnit), 0);
  const totalSales = financeData.sales.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = financeData.expenses.reduce((sum, item) => sum + item.amount, 0);
  const netProfit = totalSales - totalExpenses;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Inventory & Financial Management</h1>
        <p className="text-gray-600">Track stock levels and financial performance</p>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Sales */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              15%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm">Total Sales</h3>
          <p className="text-2xl font-bold">R{totalSales.toLocaleString()}</p>
        </div>

        {/* Total Expenses */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm text-red-600 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              8%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm">Total Expenses</h3>
          <p className="text-2xl font-bold">R{totalExpenses.toLocaleString()}</p>
        </div>

        {/* Net Profit */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              12%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm">Net Profit</h3>
          <p className="text-2xl font-bold">R{netProfit.toLocaleString()}</p>
        </div>

        {/* Inventory Value */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-gray-600 text-sm">Inventory Value</h3>
          <p className="text-2xl font-bold">R{totalInventoryValue.toLocaleString()}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Trend */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Sales Trend</h3>
            <select 
              className="border rounded-lg px-3 py-1"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={financeData.sales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Expense Breakdown</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={financeData.expenses}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {financeData.expenses.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Inventory Alert Section */}
      {lowStockItems.length > 0 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
            <h3 className="font-medium">Low Stock Alert</h3>
          </div>
          <div className="mt-2">
            {lowStockItems.map(item => (
              <p key={item.id} className="text-sm text-yellow-700">
                {item.name} - Only {item.inStock} units remaining (Minimum: {item.minRequired})
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium">Current Inventory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">In Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min Required</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost Per Unit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Restocked</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventoryData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.inStock}</td>
                  <td className="px-6 py-4">{item.minRequired}</td>
                  <td className="px-6 py-4">R{item.costPerUnit}</td>
                  <td className="px-6 py-4">{item.lastRestocked}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${item.inStock <= item.minRequired ? 
                        'bg-red-100 text-red-800' : 
                        'bg-green-100 text-green-800'}`}>
                      {item.inStock <= item.minRequired ? 'Low Stock' : 'In Stock'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}