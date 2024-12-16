import React from 'react';

const Visit = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Vineyard Tour"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6">Visit Our Estate</h2>
            <p className="text-gray-600 mb-8">
              Immerse yourself in the art of winemaking with our exclusive tours and tastings. 
              Experience the beauty of our sustainable vineyards and learn about our 
              time-honored traditions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-serif">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Estate Tours</h3>
                  <p className="text-gray-600">Guided tours through our vineyards and cellars</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-serif">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Wine Tastings</h3>
                  <p className="text-gray-600">Sample our award-winning wines with expert guidance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-serif">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Private Events</h3>
                  <p className="text-gray-600">Host your special occasion in our elegant spaces</p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Book Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;