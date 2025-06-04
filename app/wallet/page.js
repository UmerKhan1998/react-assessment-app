"use client";
import { useSelector } from "react-redux";
import { Wallet, CreditCard, Download, Calendar } from "lucide-react";
import SoftGradientBlur from "../../components/SoftGradientBlurLeft";

export default function WalletPage() {
  const balance = useSelector((state) => state.wallet.balance);
  const purchases = useSelector((state) => state.purchases.purchases);

  const totalSpent = purchases.reduce((sum, purchase) => sum + purchase.total, 0);

  return (
    <div className="relative w-full bg-white min-h-screen">
      <div className="max-w-4xl mt-[70px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wallet</h1>
          <p className="text-gray-600">Manage your balance and view purchase history</p>
        </div>

        <SoftGradientBlur />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Current Balance</p>
                <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
              </div>
              <Wallet className="h-8 w-8 text-blue-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">${totalSpent.toFixed(2)}</p>
              </div>
              <CreditCard className="h-8 w-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Purchases</p>
                <p className="text-2xl font-bold text-gray-900">{purchases.length}</p>
              </div>
              <Download className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div className="relative z-1 bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Purchase History</h2>
          </div>

          <div className="divide-y">
            {purchases.length === 0 ? (
              <div className="p-6 text-center">
                <Download className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No purchases yet</h3>
                <p className="text-gray-600">Start exploring our marketplace to make your first purchase</p>
              </div>
            ) : (
              purchases.map((purchase) => (
                <div key={purchase.id} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Left Section */}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{purchase.projectTitle}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{purchase.date}</span>
                        </div>
                        <span>Quantity: {purchase.quantity}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                          {purchase.status}
                        </span>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-right shrink-0">
                      <p className="text-lg font-semibold text-gray-900">${purchase.total.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">${purchase.price} × {purchase.quantity}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
