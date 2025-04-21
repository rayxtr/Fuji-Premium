import { Product } from '../types';

export const products: Product[] = [
  // Home Elevators
  {
    id: 'home-1',
    name: 'Fuji Residence Plus',
    category: 'home',
    type: 'elevator',
    description: 'Our premium home elevator designed for modern residences with elegant finish and whisper-quiet operation.',
    features: [
      'Compact design for residential spaces',
      'Energy-efficient operation',
      'Whisper-quiet drive system',
      'Customizable interior finishes',
      'Smart home integration'
    ],
    price: 25000,
    image: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specs: {
      'Capacity': '450 kg',
      'Speed': '0.5 m/s',
      'Floors': 'Up to 6 floors',
      'Dimensions': '1100mm x 1400mm',
      'Power': '220-240V, 50/60Hz'
    }
  },
  {
    id: 'home-2',
    name: 'Fuji Villa Navigator',
    category: 'home',
    type: 'elevator',
    description: 'Luxury home elevator designed for multi-story villas with panoramic views and premium finishes.',
    features: [
      'Panoramic glass walls available',
      'Premium wood or metal finishes',
      'Ultra-quiet hydraulic system',
      'Remote control operation',
      'Emergency backup power'
    ],
    price: 35000,
    image: 'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'home-3',
    name: 'Fuji Compact Home',
    category: 'home',
    type: 'elevator',
    description: 'Space-saving elevator solution ideal for retrofitting into existing homes with minimal structural changes.',
    features: [
      'Minimal shaft space required',
      'No machine room needed',
      'Simple installation process',
      'Low maintenance requirements',
      'Energy-efficient operation'
    ],
    price: 18000,
    image: 'https://images.pexels.com/photos/7635919/pexels-photo-7635919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'home-4',
    name: 'Fuji Panorama View',
    category: 'home',
    type: 'elevator',
    description: 'Scenic home elevator with glass enclosure for breathtaking views while in transit between floors.',
    features: [
      '360° glass enclosure option',
      'Custom lighting options',
      'Smooth start/stop technology',
      'Voice announcement system',
      'Customizable control panel'
    ],
    price: 40000,
    image: 'https://images.pexels.com/photos/6039581/pexels-photo-6039581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'home-5',
    name: 'Fuji Smart Home',
    category: 'home',
    type: 'elevator',
    description: 'Next-generation smart elevator with integrated technology for modern smart homes.',
    features: [
      'Smartphone control',
      'Voice command compatibility',
      'Usage statistics and maintenance alerts',
      'Programmable schedules',
      'Energy usage monitoring'
    ],
    price: 32000,
    image: 'https://images.pexels.com/photos/4644813/pexels-photo-4644813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
  // Car Elevators
  {
    id: 'car-1',
    name: 'Fuji AutoLift Pro',
    category: 'car',
    type: 'elevator',
    description: 'High-capacity car elevator for multi-level parking facilities and luxury residences.',
    features: [
      'Heavy-duty capacity for vehicles up to 3,000 kg',
      'Smooth acceleration and deceleration',
      'Advanced safety features',
      'Customizable platform size',
      'Automatic door operation'
    ],
    price: 65000,
    image: 'https://images.pexels.com/photos/2966375/pexels-photo-2966375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specs: {
      'Capacity': '3000 kg',
      'Speed': '0.3 m/s',
      'Platform Size': 'Customizable',
      'Drive System': 'Hydraulic',
      'Power': '380-400V, three-phase'
    }
  },
  {
    id: 'car-2',
    name: 'Fuji GarageVator',
    category: 'car',
    type: 'elevator',
    description: 'Space-saving car lift system for residential garages with limited space.',
    features: [
      'Compact design',
      'Simple operation',
      'Low maintenance requirements',
      'Robust safety features',
      'Quiet operation'
    ],
    price: 45000,
    image: 'https://images.pexels.com/photos/244394/pexels-photo-244394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'car-3',
    name: 'Fuji Commercial Auto Elevator',
    category: 'car',
    type: 'elevator',
    description: 'Heavy-duty commercial car elevator designed for public parking facilities and commercial buildings.',
    features: [
      'High capacity for SUVs and larger vehicles',
      'Fast operation for high traffic areas',
      'Durable construction for frequent use',
      'Advanced control systems',
      'Remote monitoring capabilities'
    ],
    price: 85000,
    image: 'https://images.pexels.com/photos/1117211/pexels-photo-1117211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'car-4',
    name: 'Fuji Showroom Display',
    category: 'car',
    type: 'elevator',
    description: 'Premium car elevator designed for luxury car showrooms with showcase capabilities.',
    features: [
      'Glass panels for visibility',
      'Premium lighting options',
      'Smooth and quiet operation',
      'Turntable integration option',
      'Remote control operation'
    ],
    price: 95000,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'car-5',
    name: 'Fuji AutoStack',
    category: 'car',
    type: 'elevator',
    description: 'Multi-level car stacking system for maximizing parking capacity in limited spaces.',
    features: [
      'Multiple stacking configurations',
      'Independent access to each vehicle',
      'Space-efficient design',
      'Simple user interface',
      'Low energy consumption'
    ],
    price: 75000,
    image: 'https://images.pexels.com/photos/1105188/pexels-photo-1105188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
  // Freight Elevators
  {
    id: 'freight-1',
    name: 'Fuji Heavy Duty Freight',
    category: 'freight',
    type: 'elevator',
    description: 'Industrial-grade freight elevator for warehouses, factories and distribution centers.',
    features: [
      'Massive load capacity up to 5,000 kg',
      'Reinforced cab construction',
      'Extra-wide doors for large items',
      'Heavy-duty flooring',
      'Industrial control systems'
    ],
    price: 78000,
    image: 'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specs: {
      'Capacity': '5000 kg',
      'Speed': '0.5 m/s',
      'Platform Size': '2500mm x 3000mm',
      'Door Width': '2400mm',
      'Power': '380-400V, three-phase'
    }
  },
  {
    id: 'freight-2',
    name: 'Fuji Commercial Cargo',
    category: 'freight',
    type: 'elevator',
    description: 'Mid-capacity freight elevator for commercial buildings, shopping centers, and hospitals.',
    features: [
      'Balanced capacity and speed',
      'Adaptable for various commercial uses',
      'Fire service mode',
      'Key card security options',
      'Durable finishes for high traffic'
    ],
    price: 60000,
    image: 'https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'freight-3',
    name: 'Fuji Loading Dock Elevator',
    category: 'freight',
    type: 'elevator',
    description: 'Specialized freight elevator system for connecting loading docks to storage areas.',
    features: [
      'Designed for pallet jack and forklift accessibility',
      'Weather-resistant construction',
      'High durability for constant use',
      'Simple, intuitive controls',
      'Safety interlocks with dock doors'
    ],
    price: 85000,
    image: 'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'freight-4',
    name: 'Fuji SuperLift Industrial',
    category: 'freight',
    type: 'elevator',
    description: 'Extra-heavy-duty freight elevator for manufacturing facilities and industrial applications.',
    features: [
      'Maximum load capacity up to 10,000 kg',
      'Reinforced for extreme conditions',
      'Oil and chemical resistant surfaces',
      'Heavy machinery transport capable',
      'Oversized entrance options'
    ],
    price: 120000,
    image: 'https://images.pexels.com/photos/7108219/pexels-photo-7108219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'freight-5',
    name: 'Fuji Vertical Conveyor',
    category: 'freight',
    type: 'elevator',
    description: 'Continuous material handling elevator system for high-volume freight movement.',
    features: [
      'Continuous operation design',
      'High throughput capacity',
      'Integration with conveyor systems',
      'Automated loading/unloading options',
      'Energy-efficient drive system'
    ],
    price: 95000,
    image: 'https://images.pexels.com/photos/4480982/pexels-photo-4480982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
  // Dumbwaiter Elevators
  {
    id: 'dumbwait-1',
    name: 'Fuji Kitchen Server',
    category: 'dumbwait',
    type: 'elevator',
    description: 'Compact dumbwaiter system designed for restaurants and residential kitchens.',
    features: [
      'Food-safe materials',
      'Quiet operation',
      'Compact shaft requirements',
      'Easy to clean surfaces',
      'Simple push-button operation'
    ],
    price: 12000,
    image: 'https://images.pexels.com/photos/5824530/pexels-photo-5824530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specs: {
      'Capacity': '100 kg',
      'Speed': '0.4 m/s',
      'Cab Size': '600mm x 600mm x 800mm',
      'Installation Space': 'Minimal',
      'Power': '220-240V, single-phase'
    }
  },
  {
    id: 'dumbwait-2',
    name: 'Fuji Library Book Lift',
    category: 'dumbwait',
    type: 'elevator',
    description: 'Specialized dumbwaiter for libraries and bookstores to transport books between floors.',
    features: [
      'Shelved interior for organized transport',
      'Gentle movement to protect books',
      'Quiet operation for library environments',
      'Multiple shelf configurations',
      'Lockable doors'
    ],
    price: 15000,
    image: 'https://images.pexels.com/photos/3847624/pexels-photo-3847624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dumbwait-3',
    name: 'Fuji Commercial Server',
    category: 'dumbwait',
    type: 'elevator',
    description: 'Medium-sized dumbwaiter for commercial kitchens, hotels, and hospitals.',
    features: [
      'Higher capacity for commercial use',
      'Stainless steel construction',
      'Multiple access points',
      'Programmable stops',
      'Call/send controls at each level'
    ],
    price: 18000,
    image: 'https://images.pexels.com/photos/6152363/pexels-photo-6152363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dumbwait-4',
    name: 'Fuji Document Courier',
    category: 'dumbwait',
    type: 'elevator',
    description: 'Compact document and small item transport system for offices and medical facilities.',
    features: [
      'Secure document transport',
      'Multiple compartment options',
      'Key card security available',
      'Tracking system for sensitive items',
      'Gentle handling mechanisms'
    ],
    price: 14000,
    image: 'https://images.pexels.com/photos/7821579/pexels-photo-7821579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dumbwait-5',
    name: 'Fuji MicroLift',
    category: 'dumbwait',
    type: 'elevator',
    description: 'Ultra-compact dumbwaiter solution for small spaces and minimal retrofitting.',
    features: [
      'Minimal space requirements',
      'Easy installation in existing buildings',
      'Low energy consumption',
      'Simple maintenance',
      'Affordable solution for small businesses'
    ],
    price: 9000,
    image: 'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
  // Passenger Elevators
  {
    id: 'passenger-1',
    name: 'Fuji Commercial Standard',
    category: 'passenger',
    type: 'elevator',
    description: 'Standard passenger elevator for office buildings, hotels, and residential complexes.',
    features: [
      'Capacity for 8-12 passengers',
      'Energy-efficient operation',
      'Smooth ride quality',
      'Modern interior design options',
      'Advanced safety features'
    ],
    price: 65000,
    image: 'https://images.pexels.com/photos/3779827/pexels-photo-3779827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specs: {
      'Capacity': '1000 kg',
      'Speed': '1.75 m/s',
      'Cab Size': '1600mm x 1400mm',
      'Floors': 'Up to 30 floors',
      'Drive System': 'Machine-room-less traction'
    }
  },
  {
    id: 'passenger-2',
    name: 'Fuji Panoramic View',
    category: 'passenger',
    type: 'elevator',
    description: 'Glass-enclosed scenic elevator for atriums, shopping malls, and luxury hotels.',
    features: [
      'Panoramic glass walls',
      'Premium finishes',
      'Custom lighting options',
      'Smooth and quiet operation',
      'State-of-the-art control system'
    ],
    price: 90000,
    image: 'https://images.pexels.com/photos/10260180/pexels-photo-10260180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'passenger-3',
    name: 'Fuji High-Rise Express',
    category: 'passenger',
    type: 'elevator',
    description: 'High-speed passenger elevator for skyscrapers and tall buildings.',
    features: [
      'Speeds up to 6 m/s',
      'Advanced destination control',
      'Reduced waiting times',
      'Pressure equalization system',
      'Energy regeneration technology'
    ],
    price: 150000,
    image: 'https://images.pexels.com/photos/8566535/pexels-photo-8566535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'passenger-4',
    name: 'Fuji Hospital Specialist',
    category: 'passenger',
    type: 'elevator',
    description: 'Specialized elevator designed for hospitals and healthcare facilities.',
    features: [
      'Extra-wide doors for beds and equipment',
      'Antimicrobial surfaces',
      'Emergency power backup',
      'Priority service function',
      'Smooth acceleration for patient comfort'
    ],
    price: 85000,
    image: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'passenger-5',
    name: 'Fuji Executive Premium',
    category: 'passenger',
    type: 'elevator',
    description: 'Luxury passenger elevator for high-end office buildings and luxury condominiums.',
    features: [
      'Premium materials and finishes',
      'Customizable design elements',
      'Destination dispatch system',
      'Touchless operation options',
      'Integrated multimedia displays'
    ],
    price: 110000,
    image: 'https://images.pexels.com/photos/42064/new-york-brooklyn-bridge-promenade-evening-42064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
  // Escalators
  {
    id: 'escalator-1',
    name: 'Fuji Commercial 30°',
    category: 'escalator',
    type: 'escalator',
    description: 'Standard commercial escalator for shopping centers, airports, and transit stations.',
    features: [
      'Durable construction for high traffic areas',
      '30° incline for standard applications',
      'Energy-saving operation modes',
      'Low noise design',
      'Safety sensors and emergency stop'
    ],
    price: 120000,
    image: 'https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specs: {
      'Inclination': '30 degrees',
      'Step Width': '1000mm',
      'Speed': '0.5 m/s',
      'Capacity': '9000 persons/hour',
      'Rise': 'Up to 6m standard'
    }
  },
  {
    id: 'escalator-2',
    name: 'Fuji Heavy Duty Transport',
    category: 'escalator',
    type: 'escalator',
    description: 'Heavy-duty escalator for transit stations and high-volume public areas.',
    features: [
      'Reinforced construction for constant use',
      'Higher load capacity',
      'Weather-resistant options for outdoor installation',
      'Extended operational life',
      'Advanced safety features'
    ],
    price: 150000,
    image: 'https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'escalator-3',
    name: 'Fuji Premium Retail',
    category: 'escalator',
    type: 'escalator',
    description: 'Elegant escalator design for luxury retail environments and upscale commercial spaces.',
    features: [
      'Premium glass balustrades',
      'Custom lighting options',
      'Quiet operation',
      'Slim profile design',
      'Energy-efficient operation'
    ],
    price: 135000,
    image: 'https://images.pexels.com/photos/1487652/pexels-photo-1487652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'escalator-4',
    name: 'Fuji 35° Heavy Traffic',
    category: 'escalator',
    type: 'escalator',
    description: 'Steeper angle escalator for locations with space constraints but high traffic needs.',
    features: [
      '35° incline for space efficiency',
      'Reinforced steps for heavy use',
      'Anti-slip surface treatments',
      'Enhanced handrail system',
      'Outdoor-ready options available'
    ],
    price: 140000,
    image: 'https://images.pexels.com/photos/880474/pexels-photo-880474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'escalator-5',
    name: 'Fuji Narrow Width',
    category: 'escalator',
    type: 'escalator',
    description: 'Compact escalator for locations with limited space but requiring vertical transportation.',
    features: [
      'Reduced width design',
      'Space-efficient installation',
      'Full safety feature set',
      'Energy-efficient operation',
      'Modern aesthetic options'
    ],
    price: 110000,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
  // Moving Walkways
  {
    id: 'movingWalkway-1',
    name: 'Fuji Travelator Standard',
    category: 'movingWalkway',
    type: 'escalator',
    description: 'Horizontal moving walkway for airports, exhibition centers, and large commercial spaces.',
    features: [
      'Smooth start/stop operation',
      'Pallet band surface for stability',
      'Durable construction for luggage transport',
      'Energy-efficient drive system',
      'Low maintenance requirements'
    ],
    price: 95000,
    image: 'https://images.pexels.com/photos/2033979/pexels-photo-2033979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specs: {
      'Width': '1000mm',
      'Speed': '0.5 m/s',
      'Inclination': '0-12 degrees',
      'Capacity': '7000 persons/hour',
      'Length': 'Custom, up to 100m'
    }
  },
  {
    id: 'movingWalkway-2',
    name: 'Fuji Inclined Walkway',
    category: 'movingWalkway',
    type: 'escalator',
    description: 'Inclined moving walkway for gentle slopes in shopping centers and transit connections.',
    features: [
      'Gentle incline for comfortable use with carts',
      'Anti-slip surface pattern',
      'Cart-friendly design',
      'Enhanced safety features for inclined operation',
      'Energy recovery system'
    ],
    price: 110000,
    image: 'https://images.pexels.com/photos/18253696/pexels-photo-18253696/free-photo-of-subway-stairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'movingWalkway-3',
    name: 'Fuji High-Speed Connector',
    category: 'movingWalkway',
    type: 'escalator',
    description: 'Accelerated moving walkway for airports and long-distance terminal connections.',
    features: [
      'Higher speed for longer distances',
      'Acceleration and deceleration zones',
      'Enhanced pallet surface for stability at speed',
      'Special handrail synchronization',
      'Increased capacity design'
    ],
    price: 130000,
    image: 'https://images.pexels.com/photos/3536526/pexels-photo-3536526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'movingWalkway-4',
    name: 'Fuji Outdoor Walkway',
    category: 'movingWalkway',
    type: 'escalator',
    description: 'Weather-resistant moving walkway for outdoor installations in theme parks and urban connections.',
    features: [
      'Corrosion-resistant components',
      'All-weather operation capability',
      'Heating elements for cold climates',
      'Enhanced drainage system',
      'UV-resistant materials'
    ],
    price: 120000,
    image: 'https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'movingWalkway-5',
    name: 'Fuji Premium Wide Passage',
    category: 'movingWalkway',
    type: 'escalator',
    description: 'Extra-wide moving walkway for high capacity areas with luggage or shopping carts.',
    features: [
      'Extra width for side-by-side passage',
      'Reinforced construction for heavy loads',
      'Customizable balustrades and lighting',
      'Quiet operation technology',
      'Smart energy management'
    ],
    price: 135000,
    image: 'https://images.pexels.com/photos/4032145/pexels-photo-4032145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Utility function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// Utility function to get products by type
export const getProductsByType = (type: 'elevator' | 'escalator') => {
  return products.filter(product => product.type === type);
};

// Utility function to get a specific product by ID
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};