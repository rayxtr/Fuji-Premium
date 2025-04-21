import { GalleryImage } from '../types';

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Panoramic Elevator Installation',
    image: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'elevators'
  },
  {
    id: '2',
    title: 'Commercial Escalator Project',
    image: 'https://images.pexels.com/photos/3960076/pexels-photo-3960076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'escalators'
  },
  {
    id: '3',
    title: 'Luxury Residential Elevator',
    image: 'https://images.pexels.com/photos/5824488/pexels-photo-5824488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'elevators'
  },
  {
    id: '4',
    title: 'Shopping Mall Moving Walkway',
    image: 'https://images.pexels.com/photos/4386343/pexels-photo-4386343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'escalators'
  },
  {
    id: '5',
    title: 'High-Rise Elevator Installation',
    image: 'https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'elevators'
  },
  {
    id: '6',
    title: 'Airport Terminal Escalators',
    image: 'https://images.pexels.com/photos/3049020/pexels-photo-3049020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'escalators'
  },
  {
    id: '7',
    title: 'Office Building Elevator Bank',
    image: 'https://images.pexels.com/photos/162540/elevator-old-elevator-logistics-promotion-162540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'elevators'
  },
  {
    id: '8',
    title: 'Hotel Glass Elevator Installation',
    image: 'https://images.pexels.com/photos/5824476/pexels-photo-5824476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'elevators'
  },
  {
    id: '9',
    title: 'Transit Station Escalator Network',
    image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'escalators'
  },
  {
    id: '10',
    title: 'Freight Elevator Installation',
    image: 'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'elevators'
  },
  {
    id: '11',
    title: 'Modernization Project Before/After',
    image: 'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'elevators'
  },
  {
    id: '12',
    title: 'Outdoor Escalator Installation',
    image: 'https://images.pexels.com/photos/969265/pexels-photo-969265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'escalators'
  }
];

export const getImagesByCategory = (category: string) => {
  return category === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === category);
};