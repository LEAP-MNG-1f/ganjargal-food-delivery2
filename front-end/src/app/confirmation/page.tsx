"use client";

import { useState, useEffect } from "react";

const AdminDashboard: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  const filteredOrders = orders.filter((order) => {
    const searchLowerCase = search.toLowerCase();
    return (
      order.name.toLowerCase().includes(searchLowerCase) ||
      order.buyerInfo.toLowerCase().includes(searchLowerCase) ||
      order.address.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        {/* Search Bar */}
        {/* <input
          type="text"
          placeholder="Search by Name, Buyer Info, or Address"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        /> */}

        {/* Order Table */}
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left p-4 font-medium text-gray-600">
                Order Name
              </th>
              <th className="text-left p-4 font-medium text-gray-600">
                Buyer Info
              </th>
              <th className="text-left p-4 font-medium text-gray-600">
                Payment
              </th>
              <th className="text-left p-4 font-medium text-gray-600">
                Address
              </th>
              <th className="text-left p-4 font-medium text-gray-600">
                Delivery State
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4">{order.name}</td>
                  <td className="p-4">{order.buyerInfo}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        order.payment.status === "Paid"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {order.payment.status}
                    </span>
                  </td>
                  <td className="p-4">{order.address}</td>
                  <td className="p-4">{order.deliveryState}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
