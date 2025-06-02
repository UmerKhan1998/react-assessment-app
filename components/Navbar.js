"use client"
import Link from "next/link"
import { useSelector } from "react-redux"
import { ShoppingCart, Wallet, Home } from "lucide-react"

export default function Navbar() {
  const balance = useSelector((state) => state.wallet.balance)

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Platform X</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              <Home className="h-4 w-4" />
              <span>Projects</span>
            </Link>

            <Link
              href="/wallet"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              <Wallet className="h-4 w-4" />
              <span>Wallet</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-1">
                ${balance.toFixed(2)}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
