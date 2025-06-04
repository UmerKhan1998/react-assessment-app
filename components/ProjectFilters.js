"use client"
import { useSelector, useDispatch } from "react-redux"
import { setFilters, clearFilters } from "../store/slices/projectsSlice"
import { Filter, X } from "lucide-react"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
  Box,
  Typography,
} from "@mui/material"

export default function ProjectFilters() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.projects.filters)

  const handleLocationChange = (e) => {
    dispatch(setFilters({ location: e.target.value }))
  }

  const handleTypeChange = (e) => {
    dispatch(setFilters({ type: e.target.value }))
  }

  const handlePriceChange = (e, newValue) => {
    dispatch(setFilters({ priceRange: [0, newValue] }))
  }

  const handleClearFilters = () => {
    dispatch(clearFilters())
  }

  return (
    <Box className="bg-white p-6 rounded-lg shadow-md mb-6">
      <Box className="flex items-center justify-between mb-4">
        <Box className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <Typography variant="h6" className="font-semibold text-gray-900">Filters</Typography>
        </Box>
        <Button
          onClick={handleClearFilters}
          size="small"
          startIcon={<X className="h-4 w-4" />}
          className="text-gray-500 hover:text-gray-700 normal-case"
        >
          Clear
        </Button>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormControl fullWidth>
          <InputLabel>Location</InputLabel>
          <Select
            value={filters.location}
            label="Location"
            onChange={handleLocationChange}
          >
            <MenuItem value="">All Locations</MenuItem>
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="California">California</MenuItem>
            <MenuItem value="Texas">Texas</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={filters.type}
            label="Type"
            onChange={handleTypeChange}
          >
            <MenuItem value="">All Types</MenuItem>
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            <MenuItem value="AI/ML">AI/ML</MenuItem>
            <MenuItem value="Blockchain">Blockchain</MenuItem>
            <MenuItem value="Data Science">Data Science</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <Typography variant="body2" className="text-sm font-medium text-gray-700 mb-2">
            Max Price: ${filters.priceRange[1]}
          </Typography>
          <Slider
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
            min={0}
            max={1000}
            step={10}
            aria-labelledby="price-range-slider"
          />
          <Box className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0</span>
            <span>$1000</span>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
