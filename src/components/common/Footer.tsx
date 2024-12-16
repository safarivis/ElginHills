import React from 'react';
import { Facebook, Instagram, Twitter, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { name: 'Our Apples', href: '/' },
    { name: 'Wines', href: '/wine' },
    { name: 'Visit Us', href: '/visit' },
    { name: 'About', href: '/about' },
    { name: 'Shop', href: '/shop' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <Apple className="h-8 w-8" />
              <span className="ml-2 text-2xl font-serif">Elgin Hills</span>
            </Link>
            <p className="text-gray-400">
              Growing premium apples in the heart of Elgin Valley, South Africa.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <p className="text-gray-400">
              Elgin Valley Road<br />
              Elgin, Western Cape<br />
              South Africa<br />
              info@elginhills.com
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
          <p>&copy; {new Date().getFullYear()} Elgin Hills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;