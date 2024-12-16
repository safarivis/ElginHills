import React from 'react';

const WineTasting = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Wine Tasting"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6">Wine Tasting Experience</h2>
            <p className="text-gray-600 mb-8">
              Discover our boutique wine collection in our elegant tasting room. 
              Learn about our winemaking process and enjoy perfectly paired local delicacies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-serif">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Guided Tastings</h3>
                  <p className="text-gray-600">Expert-led tastings of our premium wines</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-serif">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Cellar Tours</h3>
                  <p className="text-gray-600">Explore our winemaking facilities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-serif">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Wine Shop</h3>
                  <p className="text-gray-600">Purchase your favorite wines to take home</p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Book a Tasting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineTasting;