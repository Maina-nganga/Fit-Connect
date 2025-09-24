import React from 'react'
import { Dumbbell, Users, Calendar, Heart } from 'lucide-react'
export function Services() {
  const Services = [
    {
      icon: <Dumbbell size={48} className="text-red-500" />,
      title: 'Modern Equipment',
      description:
        'Access to state-of-the-art fitness equipment for strength training and cardio workouts.',
    },
    {
      icon: <Users size={48} className="text-red-500" />,
      title: 'Group Classes',
      description:
        'Energizing group fitness classes including HIIT, yoga, spinning, and more.',
    },
    {
      icon: <Calendar size={48} className="text-red-500" />,
      title: 'Personal Training',
      description:
        'One-on-one sessions with expert trainers tailored to your specific fitness goals.',
    },
    {
      icon: <Heart size={48} className="text-red-500" />,
      title: 'Nutrition Planning',
      description:
        'Custom nutrition plans designed by certified nutritionists to complement your workouts.',
    },
  ]
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of fitness services to help you
            achieve your health and wellness goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
