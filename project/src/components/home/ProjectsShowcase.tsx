import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { projects } from '../../data/projects';

const ProjectsShowcase = () => {
  // Take just the first 3 projects for the homepage
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionTitle 
          title="Our Recent Projects" 
          subtitle="Take a look at some of our successful installations and modernizations"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="card card-hover group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-2">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.location}</p>
                  </div>
                  <Link to={`/projects`} className="text-primary-600 hover:text-primary-700">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary inline-flex items-center">
            <span>View All Projects</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;