import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

// This would typically come from an API or database
const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 99.99,
    description: "This is a sample product description",
    imageUrl: "/images/product1.jpg"
  },
  // Add more dummy products as needed
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <div 
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-48"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">${product.price}</p>
              <Link 
                href={`/products/${product.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}