import { useState } from 'react';
import { X } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { galleryImages, getImagesByCategory } from '../data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const filteredImages = getImagesByCategory(activeCategory);
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Gallery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              View our projects and installations in action
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <SectionTitle 
          title="Project Gallery" 
          subtitle="Browse through our collection of elevator and escalator installations"
          center
        />
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeCategory === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('elevators')}
              className={`px-4 py-2 text-sm font-medium ${
                activeCategory === 'elevators' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Elevators
            </button>
            <button
              onClick={() => setActiveCategory('escalators')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeCategory === 'escalators' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Escalators
            </button>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setLightboxImage(image.image)}
            >
              <div className="relative h-64">
                <img 
                  src={image.image} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
            <div className="relative max-w-5xl w-full">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
              >
                <X size={24} />
                <span className="sr-only">Close</span>
              </button>
              <img 
                src={lightboxImage} 
                alt="Enlarged gallery image" 
                className="max-w-full max-h-[80vh] mx-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;