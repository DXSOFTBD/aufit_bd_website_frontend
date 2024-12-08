"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  specs: {
    capacity: string;
    type: string;
    energyRating: string;
    features: string[];
  };
  price: string;
}

const ProductCard = ({ id, name, image, specs, price }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm"><span className="font-medium">Capacity:</span> {specs.capacity}</p>
          <p className="text-sm"><span className="font-medium">Type:</span> {specs.type}</p>
          <p className="text-sm"><span className="font-medium">Energy Rating:</span> {specs.energyRating}</p>
          <div className="text-sm">
            <span className="font-medium">Key Features:</span>
            <ul className="list-disc list-inside ml-2">
              {specs.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-blue-600">
            ৳{price.toLocaleString()}
          </p>
          {/* <Link
            href={`/products/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link> */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            onClick={() => setIsModalOpen(true)}>
            View Details
          </button>
        </div>
        {/* Product Details Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative h-72 w-full mb-4">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Specifications</h3>
                    <p><span className="font-medium">Capacity:</span> {specs.capacity}</p>
                    <p><span className="font-medium">Type:</span> {specs.type}</p>
                    <p><span className="font-medium">Energy Rating:</span> {specs.energyRating}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside">
                      {specs.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <p className="text-2xl font-bold text-blue-600">৳{price.toLocaleString()}</p>
                  <a
                    href="https://godxg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-4">
          <a
            href="https://godxg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;