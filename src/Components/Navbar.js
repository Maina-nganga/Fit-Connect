import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="bg-gray-900 py-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-red-500 font-bold text-2xl">
              FIT<span className="text-white">CONNECT</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-red-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-red-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#membership"
              className="text-white hover:text-red-500 transition-colors"
            >
              Membership
            </a>
            <a
              href="#trainers"
              className="text-white hover:text-red-500 transition-colors"
            >
              Trainers
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-red-500 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-white hover:text-red-500 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
          <div className="hidden md:block">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Join Now
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#home"
              className="block text-white hover:text-red-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-white hover:text-red-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#membership"
              className="block text-white hover:text-red-500 transition-colors"
            >
              Membership
            </a>
            <a
              href="#trainers"
              className="block text-white hover:text-red-500 transition-colors"
            >
              Trainers
            </a>
            <a
              href="#testimonials"
              className="block text-white hover:text-red-500 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-red-500 transition-colors"
            >
              Contact
            </a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors w-full">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}


export default Navbar;
