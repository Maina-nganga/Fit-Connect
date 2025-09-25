import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  
  const socialLinks = {
    facebook: "https://facebook.com/fitconnect",
    twitter: "https://twitter.com/fitconnect",
    instagram: "https://instagram.com/fitconnect",
    youtube: "https://youtube.com/@fitconnect",
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
         
          <div>
            <h3 className="text-xl font-bold mb-4">
              FIT<span className="text-red-500">CONNECT</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Transform your body and mind with our state-of-the-art facilities
              and expert guidance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors"
                >
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Trainers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Strength Training</li>
              <li className="text-gray-400">Group Fitness</li>
              <li className="text-gray-400">Personal Training</li>
              <li className="text-gray-400">Nutrition Coaching</li>
              <li className="text-gray-400">Wellness Programs</li>
            </ul>
          </div>

   
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday:</span>
                <span className="text-gray-400">5am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday:</span>
                <span className="text-gray-400">7am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday:</span>
                <span className="text-gray-400">7am - 8pm</span>
              </li>
              <li className="flex justify-between mt-4">
                <span className="text-red-500 font-medium">Holiday Hours:</span>
                <span className="text-gray-400">8am - 4pm</span>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FitConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
