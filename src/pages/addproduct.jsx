import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Upload, Plus, X } from 'lucide-react';

const AddProductForm = () => {
  const [shippingRows, setShippingRows] = useState([
    { id: 1, location: '', size: '', weight: '', amount: '' }
  ]);

  const addShippingRow = () => {
    setShippingRows([
      ...shippingRows,
      { id: shippingRows.length + 1, location: '', size: '', weight: '', amount: '' }
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600">
            <ChevronLeft className="h-5 w-5" />
            <span>Add New Product</span>
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
                  placeholder="Enter product name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Product Description</label>
                <textarea
                  placeholder="Enter product description"
                  className="w-full p-2 border rounded-md h-32"
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
                <option value="">Add product category</option>
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
                  placeholder="Units"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">SKU</label>
                <input
                  type="text"
                  placeholder="Enter SKU"
                  className="w-full p-2 border rounded-md"
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
              <div className="border-2 border-dashed border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400">
                <Upload className="h-6 w-6 text-blue-500 mb-2" />
                <span className="text-sm text-blue-500">Click to upload</span>
                <span className="text-xs text-gray-400 text-center mt-1">Maximum file size 5MB</span>
              </div>
              <div className="border-2 border-dashed border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400">
                <Upload className="h-6 w-6 text-blue-500 mb-2" />
                <span className="text-sm text-blue-500">Click to upload</span>
                <span className="text-xs text-gray-400 text-center mt-1">Maximum file size 5MB</span>
              </div>
              <div className="border-2 border-dashed border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400">
                <Upload className="h-6 w-6 text-blue-500 mb-2" />
                <span className="text-sm text-blue-500">Click to upload</span>
                <span className="text-xs text-gray-400 text-center mt-1">Maximum file size 5MB</span>
              </div>
            </div>
          </Card>

          {/* Shipping and Delivery Section */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Shipping and Delivery</h2>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Product Weight</label>
              <input
                type="text"
                placeholder="Enter product weight"
                className="w-full p-2 border rounded-md mb-4"
              />
              
              <label className="block text-sm text-gray-600 mb-1">
                Package Size (Size of package used while shipping)
              </label>
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
                        <td className="py-2 pr-2">
                          <input
                            type="text"
                            placeholder="Location"
                            className="w-full p-1 border rounded"
                          />
                        </td>
                        <td className="py-2 pr-2">
                          <input
                            type="text"
                            placeholder="Size"
                            className="w-full p-1 border rounded"
                          />
                        </td>
                        <td className="py-2 pr-2">
                          <input
                            type="text"
                            placeholder="Weight"
                            className="w-full p-1 border rounded"
                          />
                        </td>
                        <td className="py-2 pr-2">
                          <input
                            type="text"
                            placeholder="Amount"
                            className="w-full p-1 border rounded"
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
            </div>
          </Card>

          {/* Variant Section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Variant</h2>
              <button className="text-blue-600 text-sm">+ Add Variant</button>
            </div>
            <input
              type="text"
              placeholder="Add product variant"
              className="w-full p-2 border rounded-md"
            />
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

export default AddProductForm;
