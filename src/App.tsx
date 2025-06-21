import React, { useState, useEffect } from 'react';

import { AppDataProvider, useAppData } from './context/AppDataContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VideoCarousel from './components/VideoCarousel';
import TeacherSection from './components/TeacherSection';
import DonorsSection from './components/DonorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AnnouncementsCarousel from './components/AnnouncementsCarousel';

const MainContent: React.FC = () => {
  const {
    heroData,
    aboutData,
    videoSectionsData,
    teacherData,
    testimonialsData,
    contactData,
    footerData
  } = useAppData();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navigation />
      <HeroSection {...heroData} />
      <AboutSection {...aboutData} />
      
      {/* Video Sections */}
      <section id="videos" className="py-10 md:py-16 bg-white px-4 md:px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Videos</h2>
            <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6"></div>
            <p className="text-base md:text-lg max-w-3xl mx-auto">Aprende a tu ritmo con nuestra colección de videos cuidadosamente seleccionados.</p>
          </div>
        </div>
        
        {videoSectionsData.map((section, index) => (
          <VideoCarousel 
            key={index}
            title={section.title} 
            description={section.description}
            videos={section.videos}
          />
        ))}
      </section>
      
      <TeacherSection />
      <DonorsSection />
      <TestimonialsSection {...testimonialsData} />
      <ContactSection {...contactData} />
      <AnnouncementsCarousel />
      <Footer {...footerData} />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const fallbackTimeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 5000);
    
    return () => clearTimeout(fallbackTimeout);
  }, []);

  return (
    <AppDataProvider>
      {loading && <Loader onLoadComplete={handleLoadComplete} />}
      <MainContent />
    </AppDataProvider>
  );
}

export default App;