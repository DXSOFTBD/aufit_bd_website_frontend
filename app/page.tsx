import Carousel from '@/components/carousel/Carousel';
import ProductCard from '@/components/product/ProductCard';
import About from './about/page';
import Footer from '@/components/footer/Footer';
import ImageGallery from '@/components/gallery/ImageGallery';

const products = [
  {
    id: "ac-001",
    name: "Aufit Inverter Pro 1.5 Ton",
    image: "/product_images/AUFIT-AIR-CONDITIONER.png",
    specs: {
      capacity: "1.5 Ton",
      type: "Split AC Inverter",
      energyRating: "5 Star",
      features: [
        "Dual Inverter Compressor",
        "4-way Swing",
        "Anti-bacterial Filter",
        "Smart Diagnosis"
      ]
    },
    price: 85000
  },
  {
    id: "ac-002",
    name: "Aufit Smart Cool 2 Ton",
    image: "/images/ac-2.jpg",
    specs: {
      capacity: "2 Ton",
      type: "Split AC",
      energyRating: "4 Star",
      features: [
        "Fast Cooling",
        "Auto Clean",
        "Sleep Mode",
        "Energy Saver"
      ]
    },
    price: 95000
  },
  {
    id: "ac-003",
    name: "Aufit Mini 1 Ton",
    image: "/images/ac-3.jpg",
    specs: {
      capacity: "1 Ton",
      type: "Split AC Inverter",
      energyRating: "5 Star",
      features: [
        "Compact Design",
        "Low Noise Operation",
        "Quick Cooling",
        "Wi-Fi Enabled"
      ]
    },
    price: 65000
  },
  {
    id: "ac-004",
    name: "Aufit Premium 2.5 Ton",
    image: "/images/ac-4.jpg",
    specs: {
      capacity: "2.5 Ton",
      type: "Split AC Inverter",
      energyRating: "5 Star",
      features: [
        "Heavy Duty Cooling",
        "AI Operation",
        "Smart Home Integration",
        "Ultra Silent"
      ]
    },
    price: 120000
  },
  {
    id: "ac-005",
    name: "Aufit Window Cool 1.5 Ton",
    image: "/images/ac-5.jpg",
    specs: {
      capacity: "1.5 Ton",
      type: "Window AC",
      energyRating: "3 Star",
      features: [
        "Compact Design",
        "Anti-Dust Filter",
        "Auto Restart",
        "Self Diagnosis"
      ]
    },
    price: 55000
  },
  {
    id: "ac-006",
    name: "Aufit Cassette 3 Ton",
    image: "/images/ac-6.jpg",
    specs: {
      capacity: "3 Ton",
      type: "Cassette AC",
      energyRating: "4 Star",
      features: [
        "360° Air Flow",
        "Commercial Grade",
        "Built-in Drain Pump",
        "Remote Control"
      ]
    },
    price: 150000
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Home/Carousel Section */}
      <section id="home">
        <Carousel />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Aufit</h2>
        <div className="grid md:grid-cols-1 gap-8">
          <About />
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">See Aufit in Action</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/DWD0GvKYV78"
              title="Aufit Air Conditioners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center mt-6 text-gray-600">
            Experience the power and efficiency of Aufit air conditioning systems
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGallery />

      {/* Product Lineup Section */}
      <section id="products" className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        {/* Add your contact form or contact information here */}
      </section>

      {/* Footer Section */}
      <Footer />

    </main>
  );
}