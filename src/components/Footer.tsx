import React from 'react';
import { Facebook, Instagram, Twitter, Wine } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Wine className="h-8 w-8" />
              <span className="ml-2 text-2xl font-serif">Vineyard Estate</span>
            </div>
            <p className="text-gray-400">
              Crafting exceptional wines through sustainable practices and time-honored traditions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Our Wines', 'Visit Us', 'About', 'Shop', 'Join Club'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <p className="text-gray-400">
              1234 Vineyard Lane<br />
              Wine Country, CA 94558<br />
              (555) 123-4567<br />
              info@vineyardestate.com
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vineyard Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;