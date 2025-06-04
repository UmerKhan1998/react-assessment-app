"use client"
import Link from "next/link"
import { useState } from "react"
import { useSelector } from "react-redux"
import { ShoppingCart, Wallet, Home, Menu } from "lucide-react"
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from "@mui/material"

export default function Navbar() {
  const balance = useSelector((state) => state.wallet.balance)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box className="p-4 flex items-center space-x-2">
        <ShoppingCart className="h-6 w-6 text-blue-600" />
        <Typography variant="h6" className="font-bold text-gray-900">
          Platform X
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} href="/">
          <ListItemIcon>
            <Home className="h-5 w-5 text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} href="/wallet">
          <ListItemIcon>
            <Wallet className="h-5 w-5 text-gray-700" />
          </ListItemIcon>
          <ListItemText
            primary={
              <span>
                Wallet{" "}
                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full ml-1">
                  ${balance.toFixed(2)}
                </span>
              </span>
            }
          />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                Platform X
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <IconButton onClick={toggleDrawer(true)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </IconButton>
          </div>
        </div>
      </div>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </nav>
  )
}
