import { Construction, Settings, RefreshCw, Wrench } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { services } from '../../data/services';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Construction':
      return <Construction size={40} className="text-primary-600" />;
    case 'Settings':
      return <Settings size={40} className="text-primary-600" />;
    case 'RefreshCw':
      return <RefreshCw size={40} className="text-primary-600" />;
    case 'Wrench':
      return <Wrench size={40} className="text-primary-600" />;
    default:
      return <Construction size={40} className="text-primary-600" />;
  }
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Our Services" 
          subtitle="We provide comprehensive vertical transportation solutions tailored to your needs"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;