"use client"
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  size?: 'large' | 'tall' | 'wide' | 'normal';
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/image_gallery/AUFIT_1.png",
    alt: "Professional AC Installation",
    title: "Expert Installation",
    size: 'large'
  },
  {
    id: 2,
    src: "/image_gallery/COnvenience.png",
    alt: "AC Maintenance Service",
    title: "Regular Maintenance",
    size: 'tall'
  },
  {
    id: 3,
    src: "/image_gallery/Fault Code Indicaion.png",
    alt: "Commercial Project",
    title: "Commercial Solutions",
    size: 'wide'
  },
  {
    id: 4,
    src: "/image_gallery/PCB Direct Extraction.png",
    alt: "Residential Installation",
    title: "Residential Comfort",
    size: 'normal'
  },
  {
    id: 5,
    src: "/image_gallery/PERFORMANCE.png",
    alt: "Customer Support",
    title: "24/7 Support",
    size: 'tall'
  },
  {
    id: 6,
    src: "/image_gallery/SILVER-ION FILTER.png",
    alt: "Advanced Technology",
    title: "Latest Technology",
    size: 'wide'
  },
  {
    id: 7,
    src: "/image_gallery/Three-Proofing of Outdoor Unit PCB.png",
    alt: "Advanced Technology",
    title: "Latest Technology",
    size: 'wide'
  }
];

const getImageClassName = (size: GalleryImage['size']) => {
  switch (size) {
    case 'large':
      return 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]';
    case 'tall':
      return 'row-span-2 h-[600px]';
    case 'wide':
      return 'md:col-span-2 h-[300px]';
    default:
      return 'h-[300px]';
  }
};

// Add new Modal component within the same file
function ImageModal({ image, onClose }: { 
  image: GalleryImage | null; 
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="relative w-[90vw] h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[previousIndex]);
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-lg group animate-fade-in ${getImageClassName(image.size)} cursor-pointer`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Add Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
}