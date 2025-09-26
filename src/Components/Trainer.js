import React, { useState, useEffect } from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Trainer() {
  const [trainers, setTrainers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://mp1a9cfd9f00c2aaadeb.free.beeceptor.com/trainers")
      .then((res) => res.json())
      .then((data) => setTrainers(data.trainers))
      .catch((err) => console.error("Error fetching trainers:", err));
  }, []);

  const filteredTrainers = trainers.filter((trainer) =>
    trainer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="trainers" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Trainers</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Our certified fitness professionals are here to help you reach your
            full potential.
          </p>

          <input
            type="text"
            placeholder="Search trainers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-6 px-4 py-2 rounded-md w-full md:w-1/3 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-gray-900 rounded-lg overflow-hidden group shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      {trainer.instagram && (
                        <a
                          href={trainer.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${trainer.name} Instagram`}
                          className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors"
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                      {trainer.twitter && (
                        <a
                          href={trainer.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${trainer.name} Twitter`}
                          className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                      {trainer.facebook && (
                        <a
                          href={trainer.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${trainer.name} Facebook`}
                          className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors"
                        >
                          <Facebook size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="text-red-500 mb-3">{trainer.role}</p>
                <p className="text-gray-400">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainer;
