'use client'
import React, { useState } from 'react';
import { 
  PlusCircle, 
  Search, 
  Edit,
  Trash2,
  ChevronDown
} from 'lucide-react';

export const MenuManagement = () => {
  // Available ingredients list
  const availableIngredients = [
    { id: 1, name: 'Bread Roll', category: 'Base' },
    { id: 2, name: 'French Fries', category: 'Sides' },
    { id: 3, name: 'Polony', category: 'Meats' },
    { id: 4, name: 'Russian Sausage', category: 'Meats' },
    { id: 5, name: 'Vienna', category: 'Meats' },
    { id: 6, name: 'Cheese Slice', category: 'Dairy' },
    { id: 7, name: 'Fried Egg', category: 'Extras' },
    { id: 8, name: 'Lettuce', category: 'Vegetables' },
    { id: 9, name: 'Tomato', category: 'Vegetables' },
    { id: 10, name: 'Mayonnaise', category: 'Sauces' },
    { id: 11, name: 'Tomato Sauce', category: 'Sauces' },
    { id: 12, name: 'Chili Sauce', category: 'Sauces' },
  ];

  // Sample menu data
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Classic Kota',
      category: 'Popular',
      price: 45.99,
      ingredients: [1, 2, 3, 7, 10], // IDs of ingredients
      status: 'Available'
    },
    {
      id: 2,
      name: 'Cheese Kota',
      category: 'Specialty',
      price: 55.99,
      ingredients: [1, 2, 3, 6, 7, 10],
      status: 'Available'
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);
  
  const categories = ['All', 'Popular', 'Specialty', 'Vegetarian', 'Beverages'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Helper function to get ingredient names
  const getIngredientNames = (ingredientIds: any) => {
    return ingredientIds
      .map((id: any) => availableIngredients.find(ing => ing.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Add Item
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full p-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="p-2 border rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Menu Items Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-500">Price (R)</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-500">Ingredients</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {menuItems
              .filter(item => 
                (selectedCategory === 'All' || item.category === selectedCategory) &&
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">R{item.price}</td>
                  <td className="px-6 py-4 max-w-xs truncate">
                    {getIngredientNames(item.ingredients)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Add New Menu Item</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Item Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter item name"
                  />
                </div>
                
                <div>
                  <label className="block mb-1">Category</label>
                  <select className="w-full p-2 border rounded-lg">
                    {categories.filter(cat => cat !== 'All').map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1">Price (R)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full p-2 border rounded-lg"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block mb-1">Status</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Available</option>
                    <option>Out of Stock</option>
                    <option>Coming Soon</option>
                  </select>
                </div>
              </div>

              {/* Ingredients Selection */}
              <div>
                <label className="block mb-1">Ingredients</label>
                <div className="border rounded-lg p-4 max-h-60 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(
                      availableIngredients.reduce((acc: { [key: string]: any[] }, curr) => {
                        if (!acc[curr.category]) acc[curr.category] = [];
                        acc[curr.category].push(curr);
                        return acc;
                      }, {})
                    ).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="font-medium text-gray-700 mb-2">{category}</h3>
                        {items.map((ingredient) => (
                          <label key={ingredient.id} className="flex items-center space-x-2 mb-2">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300"
                              checked={selectedIngredients.includes(ingredient.id)}
                              onChange={(e) => {
                                const id = ingredient.id;
                                if (e.target.checked) {
                                  setSelectedIngredients(prevIngredients => [...prevIngredients, id]);
                                } else {
                                  setSelectedIngredients(prevIngredients => prevIngredients.filter(prevId => prevId !== id));
                                }
                              }}
                            />
                            <span className="text-sm">{ingredient.name}</span>
                          </label>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;