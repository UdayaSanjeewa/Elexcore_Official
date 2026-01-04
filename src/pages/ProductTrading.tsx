import { ShoppingCart, Zap } from 'lucide-react';

const products = [
  {
    category: 'Inverters',
    items: [
      {
        id: 1,
        name: '2 kW Anern MPPT Solar Inverter Evo 2000va',
        price: 'Rs 70,000/=',
        image: 'https://e-catalog.com/jpg_zoom1/2578555.jpg',
        description: 'The built-in MPPT controller monitors the solar cell output in real time, intelligently adjusts charging, and extends battery life.',
        specs: ['Brand - Anern','2 kW capacity', 'Low PV', '12 V battery support']
      },
      {
        id: 2,
        name: '3.2 kW Anern MPPT Solar Inverter Evo 3200va',
        price: 'Rs 85,000/=',
        image: 'https://mzimg.com/big/31/hk0gtqkuj31.jpg',
        description: 'The AN-SCI02 Pro Series Off-Grid Hybrid Solar Inverter is a highly efficient pure sine wave inverter designed for off-grid applications.',
        specs: ['Brand - Anern','3.2 kW capacity', 'High PV', '24 V battery support']
      },
      {
        id: 3,
        name: '6.5 kW AN-FGI-P6500 Solar Inverters',
        price: 'RS 155,000/=',
        image: 'https://www.anern.com/uploads/image/20251223/an-fgi-p6500-series-solar-inverters-an-fgi-p6500_(3).jpg',
        description: 'AN-FGI-P6500 is a high-efficiency, intelligent pure sine wave solar high-frequency inverter designed specifically for off-grid.',
        specs: ['Brand - Anern','6.5 kW capacity', 'High PV', '48 V battery support']
      }
    ]
  },
  {
    category: 'Solar Panels',
    items: [
      {
        id: 5,
        name: 'JA Solar 500W Mono',
        price: 'Rs 48,500',
        image: 'https://www.pluginsolar.co.uk/wp-content/uploads/2023/03/JA-Solar-500W-Monocrystalline-MBB-Percium-Half-Cell-Solar-Panel.png',
        description: 'High-efficiency monocrystalline solar panel with 25-year warranty',
        specs: ['500W output', '22.5% efficiency', 'Weather-resistant']
      },
      {
        id: 6,
        name: 'Trina Vertex S 420W',
        price: 'Rs 24,500',
        image: 'https://www.pluginsolar.co.uk/wp-content/uploads/2023/05/trina-vertex-s-415w-black-1.jpg',
        description: 'Premium bifacial panel capturing light from both sides',
        specs: ['420W output', 'Bifacial technology', '25-year warranty']
      },
    ]
  },
  {
    category: 'HV Batteries',
    items: [
      {
        id: 9,
        name: 'Aqua/Axio 2024 HV Battery',
        price: 'Rs 320,000',
        image: 'https://www.ryansautomotive.ie/wp-content/uploads/2023/05/Aqua-battery-pack.jpg',
        description: '20 cell Toyota Aqua / Axio high voltage battery pack. Not used in Sri Lanka.',
        specs: ['2 years warranty', '2000+ cycles', 'without BMS']
      },
      {
        id: 10,
        name: 'Aqua/Axio 2023 HV Battery',
        price: 'RS 280,000',
        image: 'https://www.ryansautomotive.ie/wp-content/uploads/2023/05/Aqua-battery-pack.jpg',
        description: '20 cell Toyota Aqua / Axio high voltage battery pack. Not used in Sri Lanka.',
        specs: ['2 years warranty', '2000+ cycles', 'without BMS']
      },
      {
        id: 11,
        name: 'Aqua/Axio 2022 HV Battery',
        price: 'RS 250,000',
        image: 'https://www.ryansautomotive.ie/wp-content/uploads/2023/05/Aqua-battery-pack.jpg',
        description: '20 cell Toyota Aqua / Axio high voltage battery pack. Not used in Sri Lanka.',
        specs: ['2 years warranty', '2000+ cycles', 'without BMS']
      },
      {
        id: 12,
        name: 'Aqua/Axio 2021 HV Battery',
        price: 'RS 230,000',
        image: 'https://www.ryansautomotive.ie/wp-content/uploads/2023/05/Aqua-battery-pack.jpg',
        description: '20 cell Toyota Aqua / Axio high voltage battery pack. Not used in Sri Lanka.',
        specs: ['2 years warranty', '2000+ cycles', 'without BMS']
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
                  {/* IMAGE */}
                  {product.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* <div className="p-6 flex flex-col h-full">
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
                  </div>/* */}
                  <div className="p-6 grid grid-rows-[auto_1fr_auto] h-full">
                  <div className="grid grid-rows-[auto_1fr]">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="mt-auto">
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-2">
                        Specifications:
                      </p>
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
                      <button className="bg-cyan-500 p-2 rounded-lg">
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
