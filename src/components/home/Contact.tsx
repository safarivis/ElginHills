import React from 'react';
import { Mail, Linkedin, Twitter, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "info@elginhills.com",
      link: "mailto:info@elginhills.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      description: "Elgin Valley, Western Cape",
      link: "https://maps.google.com/?q=Elgin+Valley+Western+Cape"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Follow us on LinkedIn",
      link: "https://linkedin.com/company/elgin-hills"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      title: "X (Twitter)",
      description: "Follow us on X",
      link: "https://twitter.com/elginhills"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-6 text-left">Contact Us</h2>
          <p className="text-gray-600 mb-12 text-left">
            Get in touch with us through any of these platforms. We'd love to hear from you!
          </p>
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-900 pt-1">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;