import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { getProductsByType } from '../../data/products';

const FeaturedProducts = () => {
  const elevators = getProductsByType('elevator').slice(0, 8);
  const escalators = getProductsByType('escalator').slice(0, 4);

  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionTitle 
          title="Our Premium Products" 
          subtitle="Discover our range of high-quality elevators and escalators"
          center
        />
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-primary-900">Elevators</h3>
            <Link to="/products" className="text-primary-600 hover:text-primary-700 flex items-center">
              <span>View All</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {elevators.map((elevator) => (
              <Link key={elevator.id} to={`/products/${elevator.category}/${elevator.id}`} className="group">
                <div className="card card-hover h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={elevator.image} 
                      alt={elevator.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <p className="text-white text-sm">{elevator.category.charAt(0).toUpperCase() + elevator.category.slice(1)} Elevator</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary-900 mb-1">{elevator.name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{elevator.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-primary-900">Escalators & Moving Walkways</h3>
            <Link to="/products" className="text-primary-600 hover:text-primary-700 flex items-center">
              <span>View All</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {escalators.map((escalator) => (
              <Link key={escalator.id} to={`/products/${escalator.category}/${escalator.id}`} className="group">
                <div className="card card-hover h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={escalator.image} 
                      alt={escalator.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <p className="text-white text-sm">{escalator.category === 'escalator' ? 'Escalator' : 'Moving Walkway'}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary-900 mb-1">{escalator.name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{escalator.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;