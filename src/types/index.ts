import { ReactNode } from 'react';

// Common interfaces
export interface VideoData {
  id: string;
  title: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface ClassLevel {
  title: string;
  description: string;
  level: string;
  imageUrl: string;
}

export interface DonationOption {
  name: string;
  amount: string;
}

export interface ContactInfo {
  email: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    age: number;
    level: string;
    imageUrl: string;
  };
  rating: number;
}

// Section-specific interfaces
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

export interface AboutSectionProps {
  title: string;
  paragraphs: string[];
  images?: string[];
}

export interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ClassesSectionProps {
  title: string;
  subtitle: string;
  classLevels?: ClassLevel[];
  donationOptions: DonationOption[];
}

export interface VideoCarouselProps {
  title: string;
  description: string;
  videos: VideoData[];
}

export interface TeacherSectionProps {
  name: string;
  title: string;
  quote: string;
  rating: number;
  about: string[];
}

export interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface ContactSectionProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

export interface FooterProps {
  footerLinks: {
    title: string;
    links: {
      name: string;
      href: string;
    }[];
  }[];
  contactInfo: ContactInfo;
  legalLinks: {
    name: string;
    href: string;
  }[];
}