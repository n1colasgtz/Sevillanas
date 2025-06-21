import React from 'react';

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
  images?: string[]; // Make images optional
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, paragraphs, images }) => {
  return (
    <section id="nosotros" className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6 md:mb-8"></div>
        </div>
        
        {/* Centered text content */}
        <div className="max-w-3xl mx-auto text-center">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg mb-6" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;