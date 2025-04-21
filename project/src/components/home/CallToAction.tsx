import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Elevate Your Experience?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today to discuss your elevator and escalator needs. Our team of experts is ready to provide personalized solutions for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn-gold flex items-center justify-center">
              <span>Contact Us</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/products" className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;