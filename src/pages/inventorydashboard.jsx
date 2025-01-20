import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronUp, ChevronDown, MoreHorizontal, Filter, Download, Bell, Settings, Users, Box, ShoppingCart, BarChart2, HelpCircle, LogOut } from 'lucide-react';
import { Link, Links } from 'react-router-dom';

const Dashboard = () => {
  const metrics = [
    { label: 'Total Shipments', value: '71.21', change: -1.2 },
    { label: 'Total Orders', value: '92', change: 2.3 },
    { label: 'Revenue', value: 'Rs 13.71K', change: -0.8 },
    { label: 'Delivered', value: '140', change: 3.5 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Link to={path}></Link>
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <img src="" alt="SCALA" className="h-5px" />
          <nav className="space-y-2">
            <NavItem icon={BarChart2} text="Dashboard" active  />
            <NavItem icon={Box} text="Shipment" path="/edit" />
            <NavItem icon={Box} text="Inventory" path="/inventory" />
            <NavItem icon={ShoppingCart} text="Orders" path="/list"/>
            <NavItem icon={Box} text="Returns & Refunds" />
            <NavItem icon={Users} text="Customers" />
            <NavItem icon={Users} text="Sales Personnel" />
            <NavItem icon={Bell} text="Notifications" />
            <NavItem icon={Settings} text="Subscription" />
            <NavItem icon={HelpCircle} text="Help & Support" />
            <NavItem icon={Settings} text="Settings" />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white p-4 border-b flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <img src="/api/placeholder/32/32" alt="User" className="rounded-full" />
              <span>John Doe</span>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-600">{metric.label}</span>
                    <div className={`flex items-center ${metric.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change > 0 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      <span>{Math.abs(metric.change)}%</span>
                    </div>
                  </div>
                  <div className="text-2xl font-semibold">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Total Sales</h3>
                  <div className="flex items-center space-x-2">
                    <select className="border rounded px-2 py-1">
                      <option>Monthly</option>
                    </select>
                    <MoreHorizontal size={20} />
                  </div>
                </div>
                <div className="text-2xl font-semibold mb-4">Rs 8,290.00</div>
                {/* Placeholder for chart */}
                <div className="h-48 bg-gray-100 rounded" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Stock Availability</h3>
                  <MoreHorizontal size={20} />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>In Stock</span>
                      <span>1000 units</span>
                    </div>
                    <div className="bg-blue-500 h-2 rounded w-3/4" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Low Stock</span>
                      <span>500 units</span>
                    </div>
                    <div className="bg-blue-500 h-2 rounded w-1/2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orders Table */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Ongoing Orders</h3>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 px-3 py-1 border rounded">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-1 border rounded">
                    <Download size={16} />
                    <span>Export</span>
                  </button>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Order ID</th>
                    <th className="pb-2">Shipping ID</th>
                    <th className="pb-2">Dispatched Date</th>
                    <th className="pb-2">Shipping Method</th>
                    <th className="pb-2">Fee</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">ABC12345</td>
                    <td>LT-11039</td>
                    <td>22/09/2024</td>
                    <td>Road</td>
                    <td>Free Shipping</td>
                    <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded">Delivered</span></td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, text, active }) => (
  <div className={`flex items-center space-x-2 p-2 rounded ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
    <Icon size={20} />
    <span>{text}</span>
  </div>
);

export default Dashboard;