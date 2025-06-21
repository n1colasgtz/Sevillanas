import { 
  Instagram, 
  Facebook, 
  Youtube,
  Star
} from 'lucide-react';
import React from 'react';
import { ClassLevel, ContactInfo, DonationOption, FAQ, SocialLink, Testimonial } from '../types';

export const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Clases', href: '#clases' },
  { name: 'Videos', href: '#videos' },
  { name: 'Profesores', href: '#profesores' },
  { name: 'Contacto', href: '#contacto' }
];

export const heroData = {
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

export const aboutData = {
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

export const featuresData = [
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
];

export const classLevels: ClassLevel[] = [
  {
    title: 'Primeros Pasos',
    description: 'Ideal para quienes nunca han bailado sevillanas. Aprenderás los movimientos básicos en un entorno relajado y sin presiones.',
    level: 'Para principiantes absolutos',
    imageUrl: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Las Cuatro Sevillanas',
    description: 'Aprende las cuatro sevillanas tradicionales paso a paso, con técnicas adaptadas para ganar confianza mientras bailas.',
    level: 'Nivel intermedio',
    imageUrl: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Perfeccionamiento',
    description: 'Para quienes ya conocen los pasos básicos y quieren mejorar su técnica, expresividad y confianza en el baile.',
    level: 'Nivel avanzado',
    imageUrl: 'https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const donationOptions: DonationOption[] = [
  { name: 'Café para el profesor', amount: '5€' },
  { name: 'Apoyo mensual básico', amount: '10€' },
  { name: 'Mantenimiento de la plataforma', amount: '20€' },
  { name: 'Patrocinador del proyecto', amount: '50€' }
];

export const videoSections = [
  {
    title: 'Primeros Pasos',
    description: 'Videos para principiantes absolutos. Aprende los movimientos básicos de las sevillanas.',
    videoType: 'beginner'
  },
  {
    title: 'Sevillanas Intermedias',
    description: 'Perfecciona tu técnica y aprende nuevas variaciones con estos videos de nivel intermedio.',
    videoType: 'intermediate'
  },
  {
    title: 'Aprende a Tocar las Palmas',
    description: 'El ritmo es fundamental en las sevillanas. Aprende a tocar las palmas con estos tutoriales.',
    videoType: 'palmas'
  }
];

export const teacherData = {
  name: 'Nicolás Gutiérrez Lorca',
  title: 'Fundador y Profesor Principal',
  quote: '"Discípulo del maestro de sevillanas Juan de Dios, dediqué mi vida a hacer accesible este arte para todos. Creo firmemente que el baile es un derecho, no un privilegio, y que la vergüenza no debería ser un obstáculo para disfrutarlo."',
  imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  rating: 5,
  about: [
    'SOMOS DISCRETOS SEVILLANAS comenzó como un proyecto personal de Nicolás y ha crecido hasta convertirse en una iniciativa open source con cientos de videos recopilados de internet, cuidadosamente seleccionados y organizados para facilitar el aprendizaje.',
    'Aunque actualmente Nicolás es el único profesor, el proyecto está abierto a la colaboración de otros maestros que compartan nuestra filosofía de hacer accesible el arte de las sevillanas para todos, sin barreras económicas ni psicológicas.'
  ]
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: '"Siempre me daba vergüenza bailar en las ferias. Después de 3 meses con los videos de SOMOS DISCRETOS, bailé en la Feria de Abril sin miedo. ¡Un sueño cumplido! Doné 20€ porque lo que aprendí no tiene precio."',
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
];

export const faqs: FAQ[] = [
  {
    question: '¿Realmente es gratis?',
    answer: 'Sí, todas nuestras clases y recursos son 100% gratuitos. Aceptamos donaciones voluntarias para mantener el proyecto, pero nunca son obligatorias. Creemos que el arte debe ser accesible para todos.'
  },
  {
    question: '¿Y si tengo dos pies izquierdos?',
    answer: 'No existe tal cosa como "tener dos pies izquierdos". El baile es una habilidad que se aprende con práctica y paciencia. Nuestro método está diseñado especialmente para personas que creen no tener coordinación.'
  },
  {
    question: '¿No soy demasiado mayor para empezar?',
    answer: '¡Nunca es tarde para aprender! Tenemos alumnos de todas las edades, desde 18 hasta 80 años. Las sevillanas son un baile que puede adaptarse a cualquier condición física y edad.'
  },
  {
    question: '¿Cómo puedo colaborar con el proyecto?',
    answer: 'Puedes colaborar de varias formas: compartiendo tus experiencias, donando para mantener el proyecto, ayudando a difundir nuestra filosofía o, si tienes conocimientos de sevillanas, contribuyendo con contenido educativo.'
  }
];

export const contactInfo: ContactInfo = {
  address: 'Calle Discreción 15, 41004 Sevilla, España',
  phone: '+34 954 123 456',
  email: 'info@somosdiscretos.es'
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: '#',
    icon: <Instagram className="h-6 w-6" />
  },
  {
    name: 'Facebook',
    url: '#',
    icon: <Facebook className="h-6 w-6" />
  },
  {
    name: 'YouTube',
    url: '#',
    icon: <Youtube className="h-6 w-6" />
  }
];

export const donationInfo = {
  bankAccount: 'ES12 3456 7890 1234 5678 9012',
  paypal: 'donaciones@somosdiscretos.es',
  disclaimer: 'Todas las donaciones se destinan al mantenimiento del proyecto y a la creación de nuevo contenido educativo.'
};

export const footerLinks = [
  {
    title: 'Enlaces rápidos',
    links: navLinks
  },
  {
    title: 'Clases',
    links: [
      { name: 'Primeros Pasos', href: '#clases' },
      { name: 'Las Cuatro Sevillanas', href: '#clases' },
      { name: 'Perfeccionamiento', href: '#clases' },
      { name: 'Clases Particulares', href: '#clases' },
      { name: 'Grupos Privados', href: '#clases' }
    ]
  }
];

export const legalLinks = [
  { name: 'Política de privacidad', href: '#' },
  { name: 'Términos y condiciones', href: '#' }
];