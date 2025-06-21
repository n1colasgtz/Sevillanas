import React from 'react';
import { Mail } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinksGroup {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  footerLinks: FooterLinksGroup[];
  contactInfo: {
    email: string;
  };
  legalLinks: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ footerLinks, contactInfo, legalLinks }) => {
  const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm6 0h4v4H6V0zm6 0h4v4h-4V0zm6 0h4v4h-4V0zm0 6h4v4h-4V6zm-6 0h4v4h-4V6zm-6 0h4v4H6V6zm-6 0h4v4H0V6zm0 6h4v4H0v-4zm6 0h4v4H6v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`;

  return (
    <footer className="relative bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white py-12 md:py-16 px-4 md:px-6 lg:px-12">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: backgroundPattern }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative mr-3">
                <span className="text-4xl">💃</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl text-white tracking-wide leading-none">
                  SOMOS DISCRETOS
                </span>
                <span className="text-sm font-heading font-semibold tracking-widest uppercase text-yellow-400">
                  SEVILLANAS
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base max-w-md">
              Proyecto open source para aprender a bailar sevillanas sin miedo al qué dirán. 
              Todos hemos sido principiantes alguna vez.
            </p>
          </div>
          
          {/* Links Groups */}
          {footerLinks.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h4 className="text-lg font-bold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-sm md:text-base">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-red-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 SOMOS DISCRETOS SEVILLANAS. Proyecto Open Source. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            {legalLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;