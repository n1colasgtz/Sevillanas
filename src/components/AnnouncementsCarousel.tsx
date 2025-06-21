import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnnouncementsCarousel: React.FC = () => {
  const navigate = useNavigate();
  
  const announcement = {
    id: 1,
    title: "¡Hemos actualizado nuestra web!",
    description: "Ahora todos nuestros vídeos se ven en máxima resolución",
    image: "https://i.imgur.com/e2yQFGt.png",
    path: "/anuncio/1"
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(announcement.path);
  };

  return (
    <div id="noticias" className="bg-gradient-to-b from-transparent to-red-50/50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Últimas Noticias</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-md mx-auto">
          <button 
            onClick={handleClick}
            className="w-full text-left bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={announcement.image}
                alt={announcement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">{announcement.title}</h3>
              <p className="text-gray-600 mb-4">{announcement.description}</p>
              <div className="flex items-center text-red-700 font-medium">
                Leer más <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsCarousel;