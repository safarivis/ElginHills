import React from 'react';

const AboutUs = () => {
  const founders = [
    {
      name: 'Kallie',
      role: 'Operations Innovator',
      description: 'A hands-on innovator, blending construction and trout-farming know-how to keep operations running smoothly.',
      image: '/images/team/Kallie.webp'
    },
    {
      name: 'Jakes',
      role: 'Strategic Director',
      description: 'A strategic thinker, ensuring financial stability, sustainable growth, and a secure future for our farm.',
      image: '/images/team/Jakes.webp'
    },
    {
      name: 'Rian',
      role: 'Cultivation Expert',
      description: 'A dedicated cultivator, whose passion for world-class apple production defines the quality, taste, and consistency we deliver.',
      image: '/images/team/riaan.webp'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif mb-6">About Us</h2>
          <p className="text-gray-600 mb-8">
            Nestled in South Africa's renowned Elgin Valley, Elgin Hills Apple Farm is more than an orchard—it's a legacy in the making. 
            Our modern approach to farming honors the region's rich agricultural heritage, while pushing forward with innovation, 
            sustainability, and a focus on global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {founders.map((founder) => (
            <div key={founder.name} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">{founder.name}</h3>
              <h4 className="text-gray-600 font-medium mb-4">{founder.role}</h4>
              <p className="text-gray-600">{founder.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            At Elgin Hills, we believe in more than just agriculture—we believe in building a legacy for future generations. 
            Every harvest reflects our family values, ethical foundations, and relentless pursuit of excellence. 
            From the orchard floor to international markets, we strive to bring the best of the Elgin Valley to tables around the world.
          </p>
          <p className="text-gray-600 italic">
            We're not just producing apples; we're crafting a vision—one rooted in nature's abundance, 
            innovation's promise, and the enduring spirit of hard work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
