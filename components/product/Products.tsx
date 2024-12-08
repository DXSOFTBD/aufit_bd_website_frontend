import ProductCard from "./ProductCard";

const products = [
  {
    id: "ac-001",
    name: "Aufit QG 1 Ton",
    image: "/product_images/Aufit_AC_Model_QG.png",
    specs: {
      capacity: "1 Ton",
      type: "Split AC Inverter",
      energyRating: "5 Star",
      features: [
        "Dual Inverter Compressor",
        "4-way Swing",
        "Anti-bacterial Filter",
        "Smart Diagnosis"
      ]
    },
    price: "TBA"
  },
  {
    id: "ac-002",
    name: "Aufit QG 1.5 Ton",
    image: "/product_images/Aufit_AC_Model_QG.png",
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
    price: "TBA"
  },
  {
    id: "ac-003",
    name: "Aufit QG 2 Ton",
    image: "/product_images/Aufit_AC_Model_QG.png",
    specs: {
      capacity: "2 Ton",
      type: "Split AC Inverter",
      energyRating: "5 Star",
      features: [
        "Dual Inverter Compressor",
        "4-way Swing",
        "Anti-bacterial Filter",
        "Smart Diagnosis"
      ]
    },
    price: "TBA"
  },
  {
    id: "ac-004",
    name: "Aufit QH 1 Ton",
    image: "/product_images/Aufit_AC_Model_QG-QH.png",
    specs: {
      capacity: "1 Ton",
      type: "Split AC Inverter",
      energyRating: "5 Star",
      features: [
        "Dual Inverter Compressor",
        "4-way Swing",
        "Anti-bacterial Filter",
        "Smart Diagnosis"
      ]
    },
    price: "TBA"
  },
  {
    id: "ac-005",
    name: "Aufit QH 1.5 Ton",
    image: "/product_images/Aufit_AC_Model_QG-QH.png",
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
    price: "TBA"
  },
  {
    id: "ac-006",
    name: "Aufit QH 2 Ton",
    image: "/product_images/Aufit_AC_Model_QG-QH.png",
    specs: {
      capacity: "2 Ton",
      type: "Split AC Inverter",
      energyRating: "5 Star",
      features: [
        "Dual Inverter Compressor",
        "4-way Swing",
        "Anti-bacterial Filter",
        "Smart Diagnosis"
      ]
    },
    price: "TBA"
  },
  // ... rest of the products array
];

export default function Products() {
  return (
    <section id="products" className="py-16 px-4">
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
  );
}