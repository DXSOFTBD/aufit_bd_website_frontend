import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
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
          <Link 
            href={`/products/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
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