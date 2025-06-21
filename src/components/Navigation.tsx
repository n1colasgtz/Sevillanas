import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="relative px-3 py-2 group"
    >
      <span className="relative z-10 text-white font-heading font-medium transition-colors duration-300 group-hover:text-yellow-300">
        {label}
      </span>
      {/* Decorative background that appears on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-red-800/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-sm"></span>
      {/* Bottom border that slides in */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="block px-4 py-2 text-white hover:bg-red-800/50 transition-colors border-l-2 border-red-700 hover:border-yellow-300"
    >
      {label}
    </a>
  );
};

const Logo: React.FC = () => {
  return (
    <div className="flex items-center group">
      {/* Logo container with hover effects */}
      <div className="relative mr-3 overflow-hidden rounded-full p-1">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        {/* Dancing emoji with animation */}
        <span className="relative text-4xl animate-[dance_3s_ease-in-out_infinite]">💃</span>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-display text-3xl text-white tracking-wide leading-none group-hover:text-yellow-300 transition-colors duration-300">
            SOMOS DISCRETOS
          </span>
          <div className="relative ml-2">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative px-1.5 py-0.5 text-[10px] bg-gradient-to-r from-yellow-300 to-yellow-400 text-red-900 rounded font-medium tracking-wide">
              v3
            </span>
          </div>
        </div>
        <span className="text-sm font-heading font-semibold tracking-widest uppercase text-yellow-300/90">
          SEVILLANAS
        </span>
      </div>
    </div>
  );
};

const MobileMenuButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => {
  return (
    <button 
      className="md:hidden relative w-10 h-10 flex items-center justify-center group"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {/* Button background effect */}
      <div className="absolute inset-0 bg-red-800/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      {/* Icon */}
      <div className="relative w-6 h-5">
        <span className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ${
          isOpen ? 'rotate-45 top-2' : 'top-0'
        }`}></span>
        <span className={`absolute w-full h-0.5 bg-white top-2 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}></span>
        <span className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ${
          isOpen ? '-rotate-45 top-2' : 'top-4'
        }`}></span>
      </div>
    </button>
  );
};

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#videos", label: "Videos" },
    { href: "#profesores", label: "Sobre el Proyecto" },
    { href: "#donadores", label: "Donadores" },
    { href: "#contacto", label: "Contacto" },
    { href: "#noticias", label: "Noticias" }
  ];

  const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm6 0h4v4H6V0zm6 0h4v4h-4V0zm6 0h4v4h-4V0zm0 6h4v4h-4V6zm-6 0h4v4h-4V6zm-6 0h4v4H6V6zm-6 0h4v4H0V6zm0 6h4v4H0v-4zm6 0h4v4H6v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500`}>
      {/* Main navigation background */}
      <div className={`relative bg-gradient-to-r from-red-950 via-red-900 to-red-950 transition-all duration-500 ${
        scrolled ? 'shadow-lg shadow-red-950/50' : ''
      }`}>
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: backgroundPattern }}
        ></div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href} label={link.label} />
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <MobileMenuButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>
          
          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-3 space-y-1">
              {navLinks.map((link, index) => (
                <MobileNavLink 
                  key={index} 
                  href={link.href} 
                  label={link.label} 
                  onClick={() => setMobileMenuOpen(false)} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;