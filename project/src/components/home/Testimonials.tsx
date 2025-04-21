import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Takeshi Yamada',
    role: 'Project Manager, Tokyo Towers',
    content: 'The installation of Fuji Premium elevators in our high-rise building exceeded our expectations. Their team worked efficiently with minimal disruption to our tenants, and the final product is both reliable and visually stunning.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Haruka Tanaka',
    role: 'Facility Director, Osaka Grand Mall',
    content: 'We chose Fuji Premium for our mall renovation project because of their reputation for quality and service. The escalators they installed handle our high traffic volume with ease and have become a design feature that our visitors appreciate.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Kenji Sato',
    role: 'Architect, Modern Designs Inc.',
    content: 'As an architect working on luxury residences, I value partners who understand both aesthetics and functionality. Fuji Premium delivers on both fronts with their home elevator solutions that blend seamlessly with high-end interiors.',
    rating: 4,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[activeIndex];
  
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Hear from our satisfied customers about their experiences with Fuji Premium"
          center
          light
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-primary-800 rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-400"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{currentTestimonial.name}</h4>
                  <p className="text-primary-200">{currentTestimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < currentTestimonial.rating ? 'text-gold-400 fill-gold-400' : 'text-gray-400'} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="relative">
                <span className="text-6xl text-primary-700 absolute top-0 left-0 -mt-6 -ml-4">"</span>
                <p className="text-lg text-white/90 relative z-10 italic pl-6">
                  {currentTestimonial.content}
                </p>
                <span className="text-6xl text-primary-700 absolute bottom-0 right-0 -mb-12 -mr-4">"</span>
              </blockquote>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-primary-900" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-primary-900" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-white' : 'bg-primary-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;