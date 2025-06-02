import { createSlice } from "@reduxjs/toolkit"

const mockProjects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    price: 299,
    location: "New York",
    type: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 24,
    features: ["Responsive Design", "Payment Integration", "Admin Dashboard", "SEO Optimized"],
    seller: "TechCorp Solutions",
    category: "E-commerce",
  },
  {
    id: 2,
    title: "Mobile App UI Kit",
    description: "Complete UI kit for mobile applications with 50+ screens",
    price: 149,
    location: "California",
    type: "Design",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 18,
    features: ["50+ Screens", "Dark/Light Mode", "Figma Files", "React Native Components"],
    seller: "Design Studio Pro",
    category: "UI/UX",
  },
  {
    id: 3,
    title: "AI Chatbot Integration",
    description: "Smart chatbot solution with natural language processing",
    price: 499,
    location: "Texas",
    type: "AI/ML",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 31,
    features: ["NLP Processing", "Multi-language", "API Integration", "Analytics Dashboard"],
    seller: "AI Innovations",
    category: "Artificial Intelligence",
  },
  {
    id: 4,
    title: "Blockchain Wallet App",
    description: "Secure cryptocurrency wallet with multi-chain support",
    price: 799,
    location: "New York",
    type: "Blockchain",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 12,
    features: ["Multi-chain Support", "Hardware Wallet", "DeFi Integration", "Security Audit"],
    seller: "CryptoTech Labs",
    category: "Blockchain",
  },
  {
    id: 5,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for business intelligence and analytics",
    price: 399,
    location: "California",
    type: "Data Science",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 27,
    features: ["Real-time Data", "Custom Charts", "Export Reports", "API Integration"],
    seller: "DataViz Pro",
    category: "Analytics",
  },
  {
    id: 6,
    title: "Social Media Manager",
    description: "Complete social media management platform with scheduling",
    price: 249,
    location: "Texas",
    type: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    reviews: 19,
    features: ["Multi-platform", "Content Scheduler", "Analytics", "Team Collaboration"],
    seller: "Social Solutions",
    category: "Marketing",
  },
]

const initialState = {
  projects: mockProjects,
  filteredProjects: mockProjects,
  filters: {
    location: "",
    type: "",
    priceRange: [0, 1000],
  },
  loading: false,
  selectedProject: null,
}

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }

      // Apply filters
      let filtered = state.projects

      if (state.filters.location) {
        filtered = filtered.filter((project) =>
          project.location.toLowerCase().includes(state.filters.location.toLowerCase()),
        )
      }

      if (state.filters.type) {
        filtered = filtered.filter((project) => project.type.toLowerCase().includes(state.filters.type.toLowerCase()))
      }

      filtered = filtered.filter(
        (project) => project.price >= state.filters.priceRange[0] && project.price <= state.filters.priceRange[1],
      )

      state.filteredProjects = filtered
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload
    },
    clearFilters: (state) => {
      state.filters = {
        location: "",
        type: "",
        priceRange: [0, 1000],
      }
      state.filteredProjects = state.projects
    },
  },
})

export const { setFilters, setSelectedProject, clearFilters } = projectsSlice.actions
export default projectsSlice.reducer
