import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Skyline Tower Elevator Installation',
    description: 'Complete installation of 12 high-speed passenger elevators for a new 45-story luxury residential tower.',
    location: 'Tokyo, Japan',
    date: 'March 2025',
    image: 'https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'installation'
  },
  {
    id: '2',
    title: 'Grand Central Mall Escalator Network',
    description: 'Installation of a comprehensive network of 24 escalators and 8 moving walkways for a major shopping complex.',
    location: 'Osaka, Japan',
    date: 'January 2025',
    image: 'https://images.pexels.com/photos/3770360/pexels-photo-3770360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'installation'
  },
  {
    id: '3',
    title: 'Historic Building Elevator Modernization',
    description: 'Modernization of 4 vintage elevators in a historic office building, preserving original aesthetic while updating technology.',
    location: 'Kyoto, Japan',
    date: 'December 2024',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'modernization'
  },
  {
    id: '4',
    title: 'International Airport Terminal Expansion',
    description: 'Installation of 16 moving walkways and 28 escalators for a major international airport terminal expansion.',
    location: 'Hokkaido, Japan',
    date: 'October 2024',
    image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'installation'
  },
  {
    id: '5',
    title: 'Luxury Hotel Panoramic Elevators',
    description: 'Installation of 4 glass panoramic elevators offering stunning city views for a 5-star luxury hotel.',
    location: 'Yokohama, Japan',
    date: 'September 2024',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'installation'
  },
  {
    id: '6',
    title: 'Hospital Elevator System Upgrade',
    description: 'Complete modernization of 10 elevators for a major hospital, including new medical-specific features and enhanced reliability.',
    location: 'Sapporo, Japan',
    date: 'August 2024',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'modernization'
  },
  {
    id: '7',
    title: 'Corporate Headquarters Elevator Modernization',
    description: 'Upgraded 8 elevators with destination dispatch system and energy efficiency improvements for a corporate headquarters.',
    location: 'Nagoya, Japan',
    date: 'July 2024',
    image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'modernization'
  },
  {
    id: '8',
    title: 'Public Transit Station Escalator Installation',
    description: 'Installation of 12 heavy-duty escalators for a busy urban transit station with high daily traffic.',
    location: 'Kobe, Japan',
    date: 'June 2024',
    image: 'https://images.pexels.com/photos/4386343/pexels-photo-4386343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'installation'
  }
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};