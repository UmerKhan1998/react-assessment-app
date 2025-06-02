"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { X, CreditCard } from "lucide-react"
import { addPurchase } from "../store/slices/purchasesSlice"
import { deductBalance } from "../store/slices/walletSlice"

export default function PurchaseModal({ project, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const balance = useSelector((state) => state.wallet.balance)

  if (!isOpen || !project) return null

  const total = project.price * quantity
  const canAfford = balance >= total

  const handlePurchase = () => {
    if (canAfford) {
      dispatch(
        addPurchase({
          projectId: project.id,
          projectTitle: project.title,
          quantity,
          price: project.price,
          total,
        }),
      )
      dispatch(deductBalance(total))
      onClose()
      alert("Purchase successful!")
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Purchase Project</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Price per unit:</span>
              <span className="font-semibold">${project.price}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-lg font-medium w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Order Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Price per unit:</span>
                <span>${project.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{quantity}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between text-sm">
              <span>Wallet Balance:</span>
              <span className={`font-semibold ${canAfford ? "text-green-600" : "text-red-600"}`}>
                ${balance.toFixed(2)}
              </span>
            </div>
            {!canAfford && (
              <p className="text-red-600 text-sm mt-1">Insufficient balance. Please add funds to your wallet.</p>
            )}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handlePurchase}
              disabled={!canAfford}
              className={`flex-1 px-4 py-2 rounded-md text-white flex items-center justify-center space-x-2 ${
                canAfford ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              <span>Purchase</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
