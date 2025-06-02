"use client"
import { useSelector, useDispatch } from "react-redux"
import { setFilters, clearFilters } from "../store/slices/projectsSlice"
import { Filter, X } from "lucide-react"

export default function ProjectFilters() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.projects.filters)

  const handleLocationChange = (e) => {
    dispatch(setFilters({ location: e.target.value }))
  }

  const handleTypeChange = (e) => {
    dispatch(setFilters({ type: e.target.value }))
  }

  const handlePriceChange = (e) => {
    const value = Number.parseInt(e.target.value)
    dispatch(setFilters({ priceRange: [0, value] }))
  }

  const handleClearFilters = () => {
    dispatch(clearFilters())
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        <button onClick={handleClearFilters} className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <X className="h-4 w-4" />
          <span className="text-sm">Clear</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select
            value={filters.location}
            onChange={handleLocationChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <select
            value={filters.type}
            onChange={handleTypeChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max Price: ${filters.priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
