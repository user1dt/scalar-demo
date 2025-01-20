import React from 'react';
import { Badge } from '@/components/ui/badge';

const ProductList = () => {
  const products = [
    {
      id: 'SKI13254',
      name: 'Canola Cooking Oil',
      image: '/api/placeholder/48/48',
      variants: 3,
      stockLevel: 24,
      stockStatus: 'Low',
      price: 'Rs 22.00'
    },
    {
      id: 'SKI13254',
      name: 'Skincare products',
      image: '/api/placeholder/48/48',
      variants: 3,
      stockLevel: 24,
      stockStatus: 'Low',
      price: 'Rs 12.00'
    },
    {
      id: 'SKI13254',
      name: 'Packaged Beans',
      image: '/api/placeholder/48/48',
      variants: 8,
      stockLevel: 24,
      stockStatus: 'Low',
      price: 'Rs 24.00'
    },
    {
      id: 'SKI13254',
      name: 'Body-care Products',
      image: '/api/placeholder/48/48',
      variants: 6,
      stockLevel: 24,
      stockStatus: 'Low',
      price: 'Rs 50.00'
    },
    {
      id: 'SKI13254',
      name: 'Horlicks',
      image: '/api/placeholder/48/48',
      variants: 4,
      stockLevel: 24,
      stockStatus: 'Medium',
      price: 'Rs 15.00'
    }
  ];

  const getStockStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'low':
        return 'bg-red-50 text-red-600';
      case 'medium':
        return 'bg-orange-50 text-orange-600';
      default:
        return 'bg-green-50 text-green-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 p-4 border-b bg-gray-50">
        <div className="text-sm font-medium text-gray-500">Products</div>
        <div className="text-sm font-medium text-gray-500">FKU</div>
        <div className="text-sm font-medium text-gray-500">Stock Level</div>
        <div className="text-sm font-medium text-gray-500">Unit Price</div>
        <div className="text-sm font-medium text-gray-500"></div>
      </div>

      {/* Table Body */}
      <div className="divide-y">
        {products.map((product) => (
          <div key={product.name} className="grid grid-cols-6 gap-4 p-4 items-center">
            {/* Product Info */}
            <div className="flex items-center space-x-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-blue-600">
                  {product.variants} Variants
                </div>
              </div>
            </div>

            {/* FKU */}
            <div className="text-gray-600">#{product.id}</div>

            {/* Stock Level */}
            <div className="flex items-center space-x-2">
              <span>{product.stockLevel}</span>
              <Badge 
                className={`${getStockStatusColor(product.stockStatus)} border-0`}
              >
                {product.stockStatus}
              </Badge>
            </div>

            {/* Unit Price */}
            <div className="text-gray-600">{product.price}</div>

            {/* Action Button */}
            <div className="col-span-2">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                Restock Product
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="p-4 border-t text-center">
        <button className="text-blue-600 hover:underline">
          View Inventory
        </button>
      </div>
    </div>
  );
};

export default ProductList;
