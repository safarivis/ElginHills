import React from 'react';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

const Sustainability = () => {
  const practices = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Organic Farming",
      description: "We use natural farming methods to grow our apples without harmful chemicals"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Water Conservation",
      description: "Advanced irrigation systems help us minimize water usage while maximizing yield"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Powered",
      description: "Our facilities are powered by clean, renewable solar energy"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Natural Pest Control",
      description: "We maintain biodiversity to naturally control pests and diseases"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Sustainable Farming</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Elgin Hills, we're committed to sustainable farming practices that protect our 
            environment and ensure the highest quality apples for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice) => (
            <div key={practice.title} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-4">
                {practice.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
            Learn More About Our Practices
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;