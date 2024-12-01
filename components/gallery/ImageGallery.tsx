import Image from 'next/image';

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
    src: "/image_gallery/image_gallery_1.jpg",
    alt: "Professional AC Installation",
    title: "Expert Installation",
    size: 'large'
  },
  {
    id: 2,
    src: "/image_gallery/image_gallery_2.jpg",
    alt: "AC Maintenance Service",
    title: "Regular Maintenance",
    size: 'tall'
  },
  {
    id: 3,
    src: "/image_gallery/image_gallery_3.jpg",
    alt: "Commercial Project",
    title: "Commercial Solutions",
    size: 'wide'
  },
  {
    id: 4,
    src: "/image_gallery/image_gallery_4.jpg",
    alt: "Residential Installation",
    title: "Residential Comfort",
    size: 'normal'
  },
  {
    id: 5,
    src: "/image_gallery/image_gallery_5.jpg",
    alt: "Customer Support",
    title: "24/7 Support",
    size: 'tall'
  },
  {
    id: 6,
    src: "/image_gallery/image_gallery_6.jpg",
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
      return 'row-span-2 h-[500px]';
    case 'wide':
      return 'md:col-span-2 h-[300px]';
    default:
      return 'h-[300px]';
  }
};

export default function ImageGallery() {
  return (
    <section id="gallery" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-lg group animate-fade-in ${getImageClassName(image.size)}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}