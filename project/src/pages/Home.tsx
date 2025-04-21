import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedProducts />
      <ProjectsShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;