import { useState } from 'react';
import { projects, getProjectsByCategory } from '../data/projects';
import SectionTitle from '../components/common/SectionTitle';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : getProjectsByCategory(activeCategory);
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/162540/elevator-old-elevator-logistics-promotion-162540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Projects" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our successful installations, modernizations, and service projects
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <SectionTitle 
          title="Project Portfolio" 
          subtitle="Browse through our extensive portfolio of successful projects"
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
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('installation')}
              className={`px-4 py-2 text-sm font-medium ${
                activeCategory === 'installation' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Installations
            </button>
            <button
              onClick={() => setActiveCategory('modernization')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeCategory === 'modernization' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Modernizations
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card card-hover group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-2">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{project.title}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">{project.location}</span>
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;