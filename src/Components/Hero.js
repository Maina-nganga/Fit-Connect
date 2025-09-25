import React from 'react'
import { ChevronRightIcon } from 'lucide-react'
export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            TRANSFORM YOUR BODY,{' '}
            <span className="text-red-500">TRANSFORM YOUR LIFE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Join our state-of-the-art fitness center and start your journey to a
            healthier, stronger you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
  <a
    href="#membership"
    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors text-center"
  >
    Get Started
  </a>

  <a
    href="#services"
    className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center"
  >
    Learn More <ChevronRightIcon className="ml-2" size={20} />
  </a>
</div>

        </div>
      </div>
    </section>
  )
}


export default Hero;