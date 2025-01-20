import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ProductRestock = () => {
  const salesData = [
    { month: 'Jan', units: 10 },
    { month: 'Feb', units: 15 },
    { month: 'Mar', units: 18 },
    { month: 'Apr', units: 22 },
    { month: 'May', units: 25 },
    { month: 'Jun', units: 28 },
    { month: 'Jul', units: 30 },
    { month: 'Aug', units: 32 },
    { month: 'Sep', units: 35 },
    { month: 'Oct', units: 37 },
    { month: 'Nov', units: 39 }
  ];

  const productVariants = [
    {
      id: 1,
      attribute: 'Activator',
      value: '90 ml',
      size: '30 units',
      quantity: 24
    },
    {
      id: 2,
      attribute: 'regular',
      value: '120ml',
      size: '12 ml',
      quantity: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600">
            <ChevronLeft className="h-5 w-5" />
            <span>Restock Product</span>
          </button>
        </div>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
          Edit Product
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Product Info */}
        <div className="col-span-1">
          <Card className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img 
                src="/api/placeholder/160/160" 
                alt="Product" 
                className="rounded-lg"
              />
              <img 
                src="/api/placeholder/160/160" 
                alt="Product" 
                className="rounded-lg"
              />
            </div>
            
            <h2 className="text-xl font-semibold mb-2">Sunblock SPF-30 - 2025 V1 Yellow</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">SKU</span>
                <span>ABC-24292</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span>Beauty products</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span>Rs 149.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Size</span>
                <span>12 oz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stock</span>
                <span>24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                  Low
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Variants</span>
                <span>4 Flavors</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Product Description</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </Card>
        </div>

        {/* Sales Statistics and Variants */}
        <div className="col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Product Sales Statistics</h3>
              <div className="flex items-center">
                <span className="text-2xl font-bold">39 Units</span>
                <span className="ml-2 text-green-500 text-sm">+1.5%</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line 
                    type="monotone" 
                    dataKey="units" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Restock Variants</h3>
              <button className="text-blue-600 text-sm">+ Add Variant</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3">Attribute</th>
                  <th className="pb-3">Value</th>
                  <th className="pb-3">Size</th>
                  <th className="pb-3">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {productVariants.map((variant) => (
                  <tr key={variant.id} className="border-b">
                    <td className="py-4">{variant.attribute}</td>
                    <td className="py-4">{variant.value}</td>
                    <td className="py-4">{variant.size}</td>
                    <td className="py-4">{variant.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

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

export default ProductRestock;
