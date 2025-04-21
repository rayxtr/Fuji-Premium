import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { getProductsByType, getProductsByCategory } from '../data/products';
import ProductSlider from '../components/common/ProductSlider';
import SectionTitle from '../components/common/SectionTitle';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Products = () => {
  const elevators = getProductsByType('elevator');
  const escalators = getProductsByType('escalator');
  
  const homeElevators = getProductsByCategory('home');
  const carElevators = getProductsByCategory('car');
  const freightElevators = getProductsByCategory('freight');
  const dumbwaitElevators = getProductsByCategory('dumbwait');
  const passengerElevators = getProductsByCategory('passenger');
  
  const escalatorProducts = getProductsByCategory('escalator');
  const movingWalkwayProducts = getProductsByCategory('movingWalkway');
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover our comprehensive range of premium elevators and escalators
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-primary-100 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-primary-700'
                    : 'text-primary-700 hover:bg-white/[0.12] hover:text-primary-900'
                )
              }
            >
              Elevators
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-primary-700'
                    : 'text-primary-700 hover:bg-white/[0.12] hover:text-primary-900'
                )
              }
            >
              Escalators & Moving Walkways
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <SectionTitle 
                title="Elevators" 
                subtitle="Explore our comprehensive range of elevator solutions for various needs"
              />
              
              <div className="space-y-16">
                <ProductSlider products={homeElevators} title="Home Elevators" />
                <ProductSlider products={carElevators} title="Car Elevators" />
                <ProductSlider products={freightElevators} title="Freight Elevators" />
                <ProductSlider products={dumbwaitElevators} title="Dumbwaiter Elevators" />
                <ProductSlider products={passengerElevators} title="Passenger Elevators" />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <SectionTitle 
                title="Escalators & Moving Walkways" 
                subtitle="Discover our range of escalators and moving walkways for commercial and public spaces"
              />
              
              <div className="space-y-16">
                <ProductSlider products={escalatorProducts} title="Escalators" />
                <ProductSlider products={movingWalkwayProducts} title="Moving Walkways" />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Products;