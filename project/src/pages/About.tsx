import SectionTitle from '../components/common/SectionTitle';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="About Fuji Premium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Learn about our journey to become a leading provider of premium elevator and escalator solutions
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="From humble beginnings to industry leadership"
              />
              <p className="text-gray-600 mb-6">
                Fuji Premium was founded in 1995 with a vision to revolutionize vertical transportation through innovation, quality, and exceptional service. What began as a small team of dedicated engineers has grown into a leading company with operations across Japan and international presence.
              </p>
              <p className="text-gray-600">
                Throughout our journey, we've remained committed to our core values of excellence, reliability, and customer satisfaction. Every elevator and escalator we install is a testament to our dedication to quality and our passion for enhancing the way people move through buildings and spaces.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2506072/pexels-photo-2506072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fuji Premium history" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3712567/pexels-photo-3712567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our mission" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="Our Mission" 
                subtitle="Creating safer and more efficient vertical transportation solutions"
              />
              <p className="text-gray-600 mb-6">
                At Fuji Premium, our mission is to elevate the standard of vertical transportation through innovative design, cutting-edge technology, and unparalleled service. We strive to create elevator and escalator solutions that are not only functional and reliable but also enhance the aesthetic and experience of the spaces they serve.
              </p>
              <p className="text-gray-600">
                We are committed to sustainability, safety, and accessibility in all our products and services. By focusing on these core principles, we aim to contribute to better urban environments and improve the daily lives of people who use our installations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Quality Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality in everything we do, from the materials we select to the installations we complete and the service we provide.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Innovation</h3>
              <p className="text-gray-600">
                We continuously pursue innovative solutions that push the boundaries of what's possible in vertical transportation, embracing new technologies and approaches.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Customer Focus</h3>
              <p className="text-gray-600">
                We place our customers at the center of everything we do, listening to their needs, exceeding their expectations, and building long-term relationships.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Safety</h3>
              <p className="text-gray-600">
                Safety is non-negotiable in our industry, and we maintain the highest standards in product design, installation, and maintenance to ensure the wellbeing of all users.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary-600">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Sustainability</h3>
              <p className="text-gray-600">
                We are dedicated to environmentally responsible practices, developing energy-efficient products and minimizing our ecological footprint in all operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary-600">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical standards, building trust with our clients, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the experts behind Fuji Premium's success"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hiroshi Tanaka" 
                className="w-full h-72 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900">Hiroshi Tanaka</h3>
                <p className="text-primary-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  With over 30 years of experience in the elevator industry, Hiroshi's visionary leadership has driven Fuji Premium to become an industry leader in innovation and quality.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Yuki Nakamura" 
                className="w-full h-72 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900">Yuki Nakamura</h3>
                <p className="text-primary-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Yuki leads our engineering and R&D departments, bringing cutting-edge technologies and innovative designs to our product line while maintaining our high standards of safety.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Keiko Sato" 
                className="w-full h-72 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900">Keiko Sato</h3>
                <p className="text-primary-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  Keiko oversees our global operations, ensuring efficient project delivery, quality control, and customer satisfaction across all our installation and service teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;