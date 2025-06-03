import { createSlice } from "@reduxjs/toolkit"
import EcommerceWebsiteProject from "../../public/images/ecommerce-Website-Project.webp";
import MobileUIKit from "../../public/images/mobile_UI_kit.png";
import AiChatBot from "../../public/images/AiChatBot.webp";
import BlockchainApp from "../../public/images/blockchain_app.jpg";
import DataAnalytics from "../../public/images/dataAnalytics.webp";
import SocialMedia from "../../public/images/SocialMedia.jpg";
import OnlineLearningPlatform from "../../public/images/OnlineLearningPlatform.jpg";
import FoodOrderingSystem from "../../public/images/food-ordering-system.jpg";
import VirtualInterior from "../../public/images/VirtualInterior.webp";
import FitnessAppDev from "../../public/images/FitnessAppDev.jpg";
import VoiceAssistant from "../../public/images/VoiceAssistant.png";
import Realtor from "../../public/images/realtor.png";

const mockProjects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    price: 299,
    location: "New York",
    type: "Web Development",
    image: EcommerceWebsiteProject,
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
    image: MobileUIKit,
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
    image: AiChatBot,
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
    image: BlockchainApp,
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
    image: DataAnalytics,
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
    image: SocialMedia,
    rating: 4.5,
    reviews: 19,
    features: ["Multi-platform", "Content Scheduler", "Analytics", "Team Collaboration"],
    seller: "Social Solutions",
    category: "Marketing",
  },
  {
    id: 7,
    title: "Online Learning Platform",
    description: "Build and manage courses with video and quiz integration",
    price: 599,
    location: "Florida",
    type: "Web Development",
    image: OnlineLearningPlatform,
    rating: 4.9,
    reviews: 34,
    features: ["Video Lessons", "Quiz Module", "Student Dashboard", "Certificate Generator"],
    seller: "EduPlatform Inc.",
    category: "Education",
  },
  {
    id: 8,
    title: "Restaurant Ordering System",
    description: "Digital restaurant ordering with table, online, and QR ordering",
    price: 349,
    location: "Nevada",
    type: "Web Development",
    image: FoodOrderingSystem,
    rating: 4.6,
    reviews: 22,
    features: ["QR Menu", "POS Integration", "Delivery Tracking", "Loyalty Program"],
    seller: "FoodTech Co.",
    category: "Hospitality",
  },
  {
    id: 9,
    title: "Virtual Interior Designer",
    description: "AI-powered interior design tool for home and office",
    price: 279,
    location: "Washington",
    type: "AI/ML",
    image: VirtualInterior,
    rating: 4.7,
    reviews: 16,
    features: ["3D Visualization", "Style Matching", "Room Planner", "Shopping List"],
    seller: "HomeVision AI",
    category: "Design",
  },
  {
    id: 10,
    title: "Fitness App Template",
    description: "Pre-built fitness tracking mobile app with workout plans",
    price: 199,
    location: "Colorado",
    type: "Mobile App",
    image: FitnessAppDev,
    rating: 4.8,
    reviews: 29,
    features: ["Workout Library", "Progress Tracker", "Meal Planner", "Push Notifications"],
    seller: "FitApp Studio",
    category: "Health",
  },
  {
    id: 11,
    title: "Voice Assistant SDK",
    description: "Integrate voice commands into your apps with ease",
    price: 599,
    location: "Massachusetts",
    type: "AI/ML",
    image: VoiceAssistant,
    rating: 4.5,
    reviews: 21,
    features: ["Speech Recognition", "Offline Mode", "Multilingual", "Developer Dashboard"],
    seller: "SpeakEasy AI",
    category: "Artificial Intelligence",
  },
  {
    id: 12,
    title: "Real Estate Listing Platform",
    description: "Create a full-featured real estate portal with map integration",
    price: 699,
    location: "Illinois",
    type: "Web Development",
    image: Realtor,
    rating: 4.9,
    reviews: 37,
    features: ["Property Filters", "Interactive Maps", "Agent Dashboard", "Lead Capture"],
    seller: "PropTech Builders",
    category: "Real Estate",
  },
];


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
