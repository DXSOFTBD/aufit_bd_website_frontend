export default function VideoSection() {
    return (
      <section id="video" className="py-16 px-4">
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
    );
  }