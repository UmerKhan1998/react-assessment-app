"use client"
import { useSelector } from "react-redux"
import ProjectCard from "../components/ProjectCard"
import ProjectFilters from "../components/ProjectFilters"
import { Search } from "lucide-react"

export default function HomePage() {
  const filteredProjects = useSelector((state) => state.projects.filteredProjects)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Amazing Projects</h1>
        <p className="text-gray-600">Find the perfect digital solution for your business needs</p>
      </div>

      <ProjectFilters />

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{filteredProjects.length} Projects Found</h2>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
