import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';

const InventoryView = () => {
  const inventoryMetrics = [
    { title: 'Total Inventory', value: 'Rs 5,20,000' },
    { title: 'Units on Hand', value: '1,200' },
    { title: 'Units on Order', value: '3,000' },
    { title: 'Units to Reorder', value: '500' }
  ];

  const products = [
    {
      id: 'ABC-24292',
      name: 'Wai Wai Noodles',
      category: 'Food & Beverages',
      price: 'Rs 20.00',
      stock: '24',
    },
    {
      id: 'ABC-24282',
      name: 'Coca-Cola',
      category: 'Food & Beverages',
      price: 'Rs 30.00',
      stock: '24',
    },
    {
      id: 'ABC-24262',
      name: 'Pain Relievers',
      category: 'Healthcare Products',
      price: 'Rs 15.00',
      stock: '24',
    },
    {
      id: 'ABC-24242',
      name: 'Cold Cream',
      category: 'Cosmetics',
      price: 'Rs 45.00',
      stock: '24',
    },
    {
      id: 'ABC-24232',
      name: 'Toilet Paper',
      category: 'Home Care Products',
      price: 'Rs 35.50',
      stock: '24',
    },
    {
      id: 'ABC-24252',
      name: 'Skincare Products',
      category: 'Cosmetic',
      price: 'Rs 55.00',
      stock: '24',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <img src="/api/placeholder/32/32" alt="Scala Logo" className="h-8" />
          <h1 className="text-xl font-semibold">Inventory</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
            Add New Product
          </button>
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {inventoryMetrics.map((metric, index) => (
          <Card key={index} className="p-4 bg-white">
            <h3 className="text-sm text-gray-500 mb-1">{metric.title}</h3>
            <p className="text-xl font-semibold">{metric.value}</p>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search warehouse..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
              />
            </div>
          </div>
          <button className="px-4 py-2 border rounded-md text-sm flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 border rounded-md text-sm flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-1 text-sm rounded-full bg-blue-600 text-white">
            All
          </button>
          <button className="px-4 py-1 text-sm rounded-full text-gray-600">
            High Stock
          </button>
          <button className="px-4 py-1 text-sm rounded-full text-gray-600">
            Low Stock
          </button>
          <button className="px-4 py-1 text-sm rounded-full text-gray-600">
            Out of Stock
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">Product</th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">Stock</th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/api/placeholder/40/40"
                      alt={product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-600">{product.category}</td>
                <td className="p-4 text-gray-600">{product.price}</td>
                <td className="p-4 text-gray-600">{product.stock}</td>
                <td className="p-4">
                  <button className="text-blue-600 text-sm">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryView;
