import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, Star } from 'lucide-react'

const Testimonial = () => {
 
  const testimonials = [
    {
      name: 'David Wilson',
      role: 'Member for 2 years',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      quote:
        "Since joining Fitconnect, I've lost 30 pounds and gained more confidence than ever. The trainers are knowledgeable and the community is so supportive.",
      rating: 5,
    },
    {
      name: 'Mary Ann',
      role: 'Member for 1 year',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      quote:
        "The group classes at PowerGym are incredible. I've tried many gyms before, but nothing compares to the energy and motivation I get here.",
      rating: 5,
    },
    {
      name: 'ken Fred',
      role: 'Member for 3 years',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      quote:
        'The personal training program helped me achieve results I never thought possible. Worth every penny for the personalized attention.',
      rating: 4,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Members Say
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our community about their transformative experiences at
            PowerGym.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-800 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-red-500"
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < testimonials[currentIndex].rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-500'
                      }
                    />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-red-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-gray-700 hover:bg-red-500 p-2 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-gray-700 hover:bg-red-500 p-2 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
