import Carousel from '@/components/carousel/Carousel';
import Footer from '@/components/footer/Footer';
import ImageGallery from '@/components/gallery/ImageGallery';
import Products from '@/components/product/Products';
import AboutSection from '@/components/sections/AboutSection';
import VideoSection from '@/components/sections/VideoSection';
import DXGroupSection from '@/components/sections/DXGroupSection';


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Home Section */}
      <section id="home">
        <Carousel />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Video Section */}
      <VideoSection />

      {/* DX Group Section */}
      <DXGroupSection />

      {/* Gallery Section */}
      <ImageGallery />

      {/* Product Lineup Section */}
      <Products />

      {/* Footer Section */}
      <Footer />

    </main>
  );
}