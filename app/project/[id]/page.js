"use client"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, ArrowLeft, ShoppingCart, User, Check } from "lucide-react"
import PurchaseModal from "../../../components/PurchaseModal"

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState(null)
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)
  const projects = useSelector((state) => state.projects.projects)

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === Number.parseInt(params.id))
    setProject(foundProject)
  }, [params.id, projects])

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Projects</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96 rounded-lg overflow-hidden mb-6">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{project.type}</span>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium">{project.rating}</span>
                <span className="text-gray-500">({project.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h1>

            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{project.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{project.seller}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-gray-900">${project.price}</span>
                <span className="text-gray-500">per license</span>
              </div>

              <button
                onClick={() => setIsPurchaseModalOpen(true)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Purchase Now</span>
              </button>

              <p className="text-sm text-gray-500 mt-3 text-center">Instant download after purchase</p>
            </div>
          </div>
        </div>
      </div>

      <PurchaseModal project={project} isOpen={isPurchaseModalOpen} onClose={() => setIsPurchaseModalOpen(false)} />
    </div>
  )
}
