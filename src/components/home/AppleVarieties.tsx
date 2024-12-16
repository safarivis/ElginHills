import React from 'react';

const AppleVarieties = () => {
  const apples = [
    {
      name: "Royal Gala",
      image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Sweet and crisp with a beautiful red striped skin"
    },
    {
      name: "Granny Smith",
      image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Tart and crispy, perfect for both eating and cooking"
    },
    {
      name: "Pink Lady",
      image: "/images/pinkLady.jpeg",
      description: "Sweet-tart flavor with a distinctive pink blush"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16">Our Apple Varieties</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {apples.map((apple) => (
            <div key={apple.name} className="group">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={apple.image} 
                  alt={apple.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">{apple.name}</h3>
              <p className="text-gray-600">{apple.description}</p>
              <button className="mt-4 border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleVarieties;