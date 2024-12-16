import React from 'react';

const Accommodations = () => {
  const accommodations = [
    {
      name: "Luxury Cottages",
      image: "/images/accommodation/cottages.webp",
      description: "Charming self-catering cottages with modern amenities, nestled in the heart of our apple orchards. Perfect for families seeking a peaceful retreat.",
      details: [
        "Fully Equipped Kitchen",
        "Private Deck",
        "Mountain Views",
        "Sleeps 4-6 People"
      ]
    },
    {
      name: "Glamping Pods",
      image: "/images/accommodation/pods.webp",
      description: "Experience luxury camping in our eco-friendly pods. These unique accommodations offer comfort while staying close to nature.",
      details: [
        "Climate Controlled",
        "En-suite Bathroom",
        "Valley Views",
        "Sleeps 2 People"
      ]
    },
    {
      name: "Camping Sites",
      image: "/images/accommodation/campsites.webp",
      description: "Spacious, well-maintained camping sites for those who want to immerse themselves in the beauty of Elgin Valley under the stars.",
      details: [
        "Power Points",
        "Shared Facilities",
        "Braai Areas",
        "Pet Friendly"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-6">Stay With Us</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          From luxury cottages to camping under the stars, experience the tranquility of Elgin Valley 
          with accommodations that suit every preference.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {accommodations.map((accommodation) => (
            <div key={accommodation.name} className="group">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">{accommodation.name}</h3>
              <p className="text-gray-600 mb-4">{accommodation.description}</p>
              <div className="space-y-2 mb-6">
                {accommodation.details.map((detail, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    {detail}
                  </div>
                ))}
              </div>
              <button className="border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition-colors">
                View Details & Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
