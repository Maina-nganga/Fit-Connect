import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or ready to start your fitness journey? Get in touch
            with us.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <div className="bg-gray-900 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin
                    size={24}
                    className="text-red-500 mr-4 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      123 Fitness Street, New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone
                    size={24}
                    className="text-red-500 mr-4 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail
                    size={24}
                    className="text-red-500 mr-4 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-400">info@powergym.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock
                    size={24}
                    className="text-red-500 mr-4 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 5am - 10pm</p>
                    <p className="text-gray-400">
                      Saturday - Sunday: 7am - 8pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 h-64 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7CNew+York,NY&key=YOUR_API_KEY')",
                  filter: 'grayscale(1) contrast(1.2) opacity(0.6)',
                }}
              ></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  export default Contact;