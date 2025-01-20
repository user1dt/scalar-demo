import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Plus, X } from 'lucide-react';

const ProductEditForm = () => {
  const [shippingRows, setShippingRows] = useState([
    { id: 1, location: 'KTM', size: '2', weight: '0.500', amount: '40.00' }
  ]);

  const addShippingRow = () => {
    const newRow = {
      id: shippingRows.length + 1,
      location: '',
      size: '',
      weight: '',
      amount: ''
    };
    setShippingRows([...shippingRows, newRow]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600">
            <ChevronLeft className="h-5 w-5" />
            <span>Edit Product</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column - Product Details */}
        <div className="space-y-6">
          {/* Description Section */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Description</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Product Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value="Sunblock SPF-30 - 2025 V1 Yellow"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Product Description</label>
                <textarea
                  className="w-full p-2 border rounded-md h-32"
                  defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book."
                />
              </div>
            </div>
          </Card>

          {/* Category Section */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Category</h2>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Product Category</label>
              <select className="w-full p-2 border rounded-md">
                <option>Skincare Products</option>
                <option>Healthcare Products</option>
                <option>Beauty Products</option>
              </select>
            </div>
          </Card>

          {/* Inventory Section */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Inventory</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Quantity</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md"
                  value="40"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">SKU</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value="ABC-24292"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Images and Shipping */}
        <div className="space-y-6">
          {/* Product Images Section */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Product Images</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center">
                <Plus className="h-6 w-6 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Click to upload</span>
                <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
              </div>
              <div className="relative">
                <img
                  src="/api/placeholder/160/160"
                  alt="Product"
                  className="rounded-lg w-full h-full object-cover"
                />
                <button className="absolute -top-2 -right-2 bg-red-100 rounded-full p-1">
                  <X className="h-4 w-4 text-red-600" />
                </button>
              </div>
              <div className="relative">
                <img
                  src="/api/placeholder/160/160"
                  alt="Product"
                  className="rounded-lg w-full h-full object-cover"
                />
                <button className="absolute -top-2 -right-2 bg-red-100 rounded-full p-1">
                  <X className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </div>
          </Card>

          {/* Shipping and Delivery Section */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Shipping and Delivery</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500">
                    <th className="pb-2">Location</th>
                    <th className="pb-2">Size</th>
                    <th className="pb-2">Weight</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {shippingRows.map((row) => (
                    <tr key={row.id}>
                      <td className="py-2">
                        <input
                          type="text"
                          className="w-full p-1 border rounded"
                          defaultValue={row.location}
                        />
                      </td>
                      <td className="py-2">
                        <input
                          type="text"
                          className="w-full p-1 border rounded"
                          defaultValue={row.size}
                        />
                      </td>
                      <td className="py-2">
                        <input
                          type="text"
                          className="w-full p-1 border rounded"
                          defaultValue={row.weight}
                        />
                      </td>
                      <td className="py-2">
                        <input
                          type="text"
                          className="w-full p-1 border rounded"
                          defaultValue={row.amount}
                        />
                      </td>
                      <td className="py-2">
                        <button className="text-red-600">
                          <X className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={addShippingRow}
              className="mt-4 text-blue-600 text-sm flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Row
            </button>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditForm;
