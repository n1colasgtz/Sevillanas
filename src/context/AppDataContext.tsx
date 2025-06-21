import React, { createContext, useContext, ReactNode } from 'react';
import { Instagram } from 'lucide-react';
import { 
  HeroSectionProps, 
  AboutSectionProps, 
  FeaturesSectionProps,
  ClassesSectionProps,
  TeacherSectionProps,
  TestimonialsSectionProps,
  ContactSectionProps,
  FooterProps,
  VideoData
} from '../types';
import { beginnerVideos, intermediateVideos, palmasVideos, exampleSevillanas } from '../data/videos';

// Define the shape of our context data
interface AppDataContextType {
  heroData: HeroSectionProps;
  aboutData: AboutSectionProps;
  featuresData: FeaturesSectionProps;
  classesData: ClassesSectionProps;
  videoSectionsData: {
    title: string;
    description: string;
    videos: VideoData[];
  }[];
  teacherData: TeacherSectionProps;
  testimonialsData: TestimonialsSectionProps;
  contactData: ContactSectionProps;
  footerData: FooterProps;
}

// Create the context with a default undefined value
const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

// Provider component that wraps the app and makes data available
export const AppDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Hero Section Data
  const heroData: HeroSectionProps = {
    title: 'Aprende Sevillanas Sinvergüenza',
    subtitle: 'Todos hemos sido principiantes alguna vez. En SOMOS DISCRETOS SEVILLANAS, te enseñamos a bailar sin miedo al qué dirán.',
    backgroundImage: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    primaryButton: {
      text: 'Nuestras Clases Gratuitas',
      href: '#clases'
    },
    secondaryButton: {
      text: 'Nuestra Filosofía',
      href: '#nosotros'
    }
  };

  // About Section Data
  const aboutData: AboutSectionProps = {
    title: 'Nuestra Filosofía',
    paragraphs: [
      'En <span class="font-bold">SOMOS DISCRETOS SEVILLANAS</span> entendemos que dar los primeros pasos en el baile puede ser intimidante. La vergüenza y el miedo al qué dirán son barreras que impiden a muchas personas disfrutar del arte de las sevillanas.',
      'Nuestra academia nació como un <span class="font-bold">proyecto open source</span> con una misión clara: crear un espacio seguro donde puedas aprender a tu ritmo, sin juicios ni presiones. Porque todos hemos sido principiantes en algo y sabemos lo que se siente.',
      'Con métodos adaptados a cada persona, cientos de videos recopilados de internet y un ambiente de confianza, te guiaremos paso a paso hasta que domines las sevillanas y, lo más importante, disfrutes del proceso sin preocuparte por lo que los demás puedan pensar.'
    ],
    images: [
      'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535225737556-605211dc2e80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  };

  // Features Section Data
  const featuresData: FeaturesSectionProps = {
    title: '¿Por Qué Elegirnos?',
    subtitle: 'Nuestra academia es diferente porque entendemos tus miedos y te ayudamos a superarlos.',
    features: [
      {
        title: 'Ambiente Sin Juicios',
        description: 'Creamos un espacio donde puedes equivocarte, reírte y aprender sin sentirte observado o juzgado.',
        icon: 'Heart'
      },
      {
        title: 'Recursos Abiertos',
        description: 'Proyecto open source con cientos de videos recopilados de internet, organizados para facilitar tu aprendizaje paso a paso.',
        icon: 'Users'
      },
      {
        title: 'Totalmente Gratuito',
        description: 'Acceso libre a todas nuestras clases. Aceptamos donaciones voluntarias para mantener el proyecto vivo y seguir creciendo.',
        icon: 'Gift'
      }
    ]
  };

  // Classes Section Data
  const classesData: ClassesSectionProps = {
    title: 'Nuestras Clases',
    subtitle: 'Ofrecemos diferentes niveles para que encuentres el que mejor se adapte a ti, siempre en un ambiente discreto y acogedor.',
    donationOptions: [
      { name: 'Café para el profesor', amount: '5€' },
      { name: 'Apoyo mensual básico', amount: '10€' },
      { name: 'Mantenimiento de la plataforma', amount: '20€' },
      { name: 'Patrocinador del proyecto', amount: '50€' }
    ]
  };

  // Video Sections Data
  const videoSectionsData = [
    {
      title: 'Primeros Pasos',
      description: 'Videos para principiantes absolutos. Aprende los movimientos básicos de las sevillanas.',
      videos: beginnerVideos
    },
    {
      title: 'Sevillanas Intermedias',
      description: 'Perfecciona tu técnica y aprende nuevas variaciones con estos videos de nivel intermedio.',
      videos: intermediateVideos
    },
    {
      title: 'Las Cuatro Sevillanas (Muy Lentas)',
      description: 'Aprende cada sevillana a un ritmo muy lento para dominar todos los pasos.',
      videos: exampleSevillanas
    },
    {
      title: 'Aprende a Tocar las Palmas',
      description: 'El ritmo es fundamental en las sevillanas. Aprende a tocar las palmas con estos tutoriales.',
      videos: palmasVideos
    }
  ];

  // Teacher Data
  const teacherData: TeacherSectionProps = {
    name: '',
    title: 'Sobre el Proyecto',
    quote: 'Nos hemos curado en humildad. Entendemos que el aprendizaje es un camino continuo, y nuestro profesor también necesita seguir aprendiendo.',
    rating: 0,
    about: [
      'En SOMOS DISCRETOS SEVILLANAS reconocemos que el aprendizaje es un proceso continuo. No pretendemos saberlo todo, sino compartir lo que sabemos mientras seguimos creciendo junto a nuestra comunidad.',
      'Esta honestidad y transparencia son parte fundamental de nuestra filosofía. Creemos que reconocer nuestras limitaciones y mantener una actitud de aprendizaje constante nos hace mejores maestros.'
    ]
  };

  // Testimonials Data
  const testimonialsData: TestimonialsSectionProps = {
    title: 'Testimonios',
    subtitle: 'Personas como tú que superaron sus miedos y ahora disfrutan bailando sevillanas.',
    testimonials: [
      {
        id: '1',
        text: '"Siempre me daba vergüenza bailar en las ferias. Después de 3 meses con los videos de SOMOS DISCRETOS, bailé en la Feria de Abril sin miedo al qué dirán. ¡Un sueño cumplido! Doné 20€ porque lo que aprendí no tiene precio."',
        author: {
          name: 'Ana García',
          age: 38,
          level: 'principiante',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
        },
        rating: 5
      },
      {
        id: '2',
        text: '"Tenía 45 años y nunca había bailado. Me daba pánico hacer el ridículo. Aquí encontré un espacio donde aprender sin sentirme juzgado. Ahora bailo en cada celebración y dono 10€ mensuales para que otros puedan beneficiarse."',
        author: {
          name: 'Carlos Martínez',
          age: 45,
          level: 'principiante',
          imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
        },
        rating: 5
      },
      {
        id: '3',
        text: '"Mi boda se acercaba y quería sorprender a mi pareja bailando sevillanas. Gracias a las clases gratuitas, pude dar la sorpresa sin gastar una fortuna. Doné 50€ como agradecimiento porque el valor de lo que aprendí es incalculable."',
        author: {
          name: 'Elena Rodríguez',
          age: 29,
          level: 'principiante',
          imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
        },
        rating: 5
      }
    ]
  };

  // Contact Data
  const contactData: ContactSectionProps = {
    contactInfo: {
      email: 'somosdiscretos@protonmail.com'
    },
    socialLinks: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/somosdiscretos_sevillanas',
        icon: <Instagram className="h-6 w-6" />
      }
    ]
  };

  // Footer Data
  const footerData: FooterProps = {
    footerLinks: [
      {
        title: 'Enlaces rápidos',
        links: [
          { name: 'Inicio', href: '#inicio' },
          { name: 'Nosotros', href: '#nosotros' },
          { name: 'Videos', href: '#videos' },
          { name: 'Proyecto', href: '#proyecto' },
          { name: 'Donadores', href: '#donadores' },
          { name: 'Contacto', href: '#contacto' }
        ]
      },
      {
        title: 'Clases',
        links: [
          { name: 'Primeros Pasos', href: '#videos' },
          { name: 'Las Cuatro Sevillanas', href: '#videos' },
          { name: 'Perfeccionamiento', href: '#videos' },
          { name: 'Clases Particulares', href: '#contacto' },
          { name: 'Grupos Privados', href: '#contacto' }
        ]
      }
    ],
    contactInfo: {
      email: 'somosdiscretos@protonmail.com'
    },
    legalLinks: [
      { name: 'Política de privacidad', href: '#' },
      { name: 'Términos y condiciones', href: '#' }
    ]
  };

  const value = {
    heroData,
    aboutData,
    featuresData,
    classesData,
    videoSectionsData,
    teacherData,
    testimonialsData,
    contactData,
    footerData
  };

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};

// Custom hook to use the app data context
export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (context === undefined) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};