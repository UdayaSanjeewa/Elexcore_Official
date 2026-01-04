import { ShoppingCart, Zap } from 'lucide-react';

const products = [
  {
    category: 'Inverters',
    items: [
      {
        id: 1,
        name: '5kW Hybrid Solar Inverter',
        price: '₹45,000',
        description: 'Advanced hybrid inverter with MPPT controller, suitable for off-grid and grid-tie systems',
        specs: ['5kW capacity', 'Dual MPPT', '48V battery support']
      },
      {
        id: 2,
        name: '10kW Three-Phase Inverter',
        price: '₹85,000',
        description: 'Commercial-grade inverter for industrial applications and large installations',
        specs: ['10kW capacity', '3-phase output', 'IP65 rated']
      },
      {
        id: 3,
        name: '3kW Pure Sine Wave Inverter',
        price: '₹28,000',
        description: 'Compact pure sine wave inverter for residential applications',
        specs: ['3kW capacity', 'Pure sine wave', 'LED display']
      },
      {
        id: 4,
        name: '7.5kW MPPT Solar Inverter',
        price: '₹62,000',
        description: 'High-efficiency MPPT inverter with maximum power tracking',
        specs: ['7.5kW capacity', 'MPPT technology', 'WiFi monitoring']
      }
    ]
  },
  {
    category: 'Solar Panels',
    items: [
      {
        id: 5,
        name: '450W Mono Solar Panel',
        price: '₹18,500',
        description: 'High-efficiency monocrystalline solar panel with 25-year warranty',
        specs: ['450W output', '22.5% efficiency', 'Weather-resistant']
      },
      {
        id: 6,
        name: '550W Bifacial Solar Panel',
        price: '₹24,500',
        description: 'Premium bifacial panel capturing light from both sides',
        specs: ['550W output', 'Bifacial technology', '25-year warranty']
      },
      {
        id: 7,
        name: '380W Poly Solar Panel',
        price: '₹14,800',
        description: 'Cost-effective polycrystalline panel for large-scale installations',
        specs: ['380W output', '19.8% efficiency', 'Durable frame']
      },
      {
        id: 8,
        name: '600W Super Mono Panel',
        price: '₹28,900',
        description: 'Latest generation monocrystalline panel with enhanced efficiency',
        specs: ['600W output', '23.5% efficiency', 'Anti-reflective coating']
      }
    ]
  },
  {
    category: 'Batteries',
    items: [
      {
        id: 9,
        name: '10kWh Lithium Battery',
        price: '₹4,50,000',
        description: 'High-capacity lithium battery system with battery management',
        specs: ['10kWh capacity', '5000+ cycles', 'BMS included']
      },
      {
        id: 10,
        name: '5kWh Lead Acid Battery',
        price: '₹1,25,000',
        description: 'Reliable lead-acid battery for backup applications',
        specs: ['5kWh capacity', '2000+ cycles', 'Maintenance-free']
      },
      {
        id: 11,
        name: '15kWh LiFePO4 Battery',
        price: '₹6,75,000',
        description: 'Industrial-grade LiFePO4 battery for long-term storage',
        specs: ['15kWh capacity', '6000+ cycles', '25-year lifespan']
      },
      {
        id: 12,
        name: '3.5kWh Portable Power Bank',
        price: '₹95,000',
        description: 'Portable lithium power bank for emergency backup',
        specs: ['3.5kWh capacity', 'Portable design', 'Fast charging']
      }
    ]
  }
];

export default function ProductTrading() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Product Trading
          </h1>
          <p className="text-xl text-gray-300 mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Quality electrical and energy solutions at competitive prices
          </p>
          <p className="text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our wide range of inverters, solar panels, and batteries
          </p>
        </div>

        {products.map((section, sectionIndex) => (
          <div key={section.category} className="mb-20 animate-fade-in" style={{ animationDelay: `${0.3 + sectionIndex * 0.1}s` }}>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white">{section.category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((product) => (
                <div
                  key={product.id}
                  className="bg-gradient-to-br from-slate-900/50 to-blue-950/50 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden group"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Specifications:</p>
                        <ul className="space-y-1">
                          {product.specs.map((spec, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start">
                              <span className="text-cyan-400 mr-2">•</span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-slate-700/50 pt-4 mt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-cyan-400">{product.price}</p>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-xl border border-cyan-400/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Interested in Bulk Orders?</h3>
          <p className="text-gray-300 mb-6">
            Get special pricing and customized solutions for large quantity orders
          </p>
          <a
            href="https://wa.me/message"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all hover:shadow-lg hover:shadow-cyan-500/50 font-medium"
          >
            <ShoppingCart className="mr-2 w-5 h-5" />
            Contact for Bulk Orders
          </a>
        </div>
      </div>
    </div>
  );
}
