import React from 'react';
import { HeroSectionProps } from '../types';

// Separate button components - Single Responsibility Principle
const PrimaryButton: React.FC<{ text: string; href: string }> = ({ text, href }) => (
  <a 
    href={href} 
    className="text-center bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold py-3 px-6 md:px-8 rounded-full transition-colors shadow-lg transform hover:scale-105 transition-transform duration-300"
  >
    {text}
  </a>
);

const SecondaryButton: React.FC<{ text: string; href: string }> = ({ text, href }) => (
  <a 
    href={href} 
    className="text-center bg-transparent hover:bg-white hover:text-red-900 text-white font-bold py-3 px-6 md:px-8 border-2 border-white rounded-full transition-all hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
  >
    {text}
  </a>
);

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton
}) => {
  // Use the provided Imgur image URL
  const backgroundImage = "https://i.imgur.com/e2yQFGt.png";
  
  return (
    <section id="inicio" className="relative min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      {/* Add a darker overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12 py-20 md:py-0">
        {/* Add decorative element */}
        <div className="absolute top-1/4 -left-4 w-20 h-20 rounded-full bg-red-600/20 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-yellow-500/10 blur-xl"></div>
        
        <div className="mt-16 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-heading leading-tight">
            <span className="underline-highlight font-extrabold text-white">Aprende Sevillanas Sin Vergüenza</span>
            <span> </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl font-body">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <PrimaryButton text={primaryButton.text} href={primaryButton.href} />
            <SecondaryButton text={secondaryButton.text} href={secondaryButton.href} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;