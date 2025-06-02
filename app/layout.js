import { Inter } from "next/font/google"
import "./globals.css"
import StoreProvider from "../components/StoreProvider"
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Platform X Marketplace",
  description: "A modern marketplace for digital projects",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>{children}</main>
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}
