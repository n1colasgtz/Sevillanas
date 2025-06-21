import React from 'react';
import { Heart, Users, Gift } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, subtitle, features }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="h-7 w-7 md:h-8 md:w-8 text-red-700" />;
      case 'Users':
        return <Users className="h-7 w-7 md:h-8 md:w-8 text-red-700" />;
      case 'Gift':
        return <Gift className="h-7 w-7 md:h-8 md:w-8 text-red-700" />;
      default:
        return <Heart className="h-7 w-7 md:h-8 md:w-8 text-red-700" />;
    }
  };

  // Modify the subtitle to add the underline highlight for both phrases
  const highlightedSubtitle = subtitle.replace(
    'entendemos tus miedos y te ayudamos a superarlos',
    '<span class="underline-highlight font-semibold">entendemos tus miedos y te ayudamos a superarlos</span>'
  );

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: highlightedSubtitle }}></p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
              <div className="bg-red-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;