import React from "react";
import Hero from "./Components/Hero";
import Membership from "./Components/Membership";
import Trainer from "./Components/Trainer";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="membership">
          <Membership />
        </section>
        <section id="trainers">
          <Trainer />
        </section>
        <section id="testimonials">
          <Testimonial />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
