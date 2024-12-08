'use client';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLoading } from '@/components/providers/LoadingProvider';
import { useState } from 'react';
import { useEffect } from 'react';

// You'll need to replace this with your actual data fetching logic
interface Product {
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
  description?: string; // Additional field for detailed description
}

const ProductDetail = () => {
  const { setIsLoading } = useLoading();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigateHome = async () => {
    setIsLoading(true);
    router.push('/');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link 
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <p className="text-3xl font-bold text-blue-600">
            ৳{product.price.toLocaleString()}
          </p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Specifications</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Capacity:</span> {product.specs.capacity}</p>
              <p><span className="font-medium">Type:</span> {product.specs.type}</p>
              <p><span className="font-medium">Energy Rating:</span> {product.specs.energyRating}</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.specs.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {product.description && (
              <div>
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}
          </div>

          <a 
            href="https://godxg.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;