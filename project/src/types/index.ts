export interface Product {
  id: string;
  name: string;
  category: 'home' | 'car' | 'freight' | 'dumbwait' | 'passenger' | 'escalator' | 'movingWalkway';
  type: 'elevator' | 'escalator';
  description: string;
  features: string[];
  price: number;
  image: string;
  specs?: Record<string, string>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  category: 'installation' | 'modernization' | 'service';
}

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
}