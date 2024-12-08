import Image from 'next/image';

const About = () => {
  return (
    <div className="space-y-16">
      {/* Company Overview */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Company Overview</h3>
          <p className="text-lg text-gray-700">
            Aufit, a premium sub-brand of AUX Group, specializes in manufacturing innovative air conditioning systems for homes and businesses. With the backing of AUX&apos decades of experience and cutting-edge technology, we deliver superior comfort and efficiency to our customers.
            Our parent company, AUX Group, was established in 1986 and has grown into a diverse enterprise covering multiple industries including air conditioning, power utilization, power distribution, new energy, and medical services. As part of one of China&apos top 500 enterprises, Aufit leverages AUX&apos technological expertise while focusing on premium cooling solutions for the global market.
          </p>
        </div>
        <div>
          <Image
            src="/about_aufit/aux_building.jpg"
            alt="Aufit Headquarters"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Image
            src="/image_gallery/AUFIT_1.png"
            alt="Our Mission"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold mb-4">Our Mission & Vision</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Mission</h4>
              <p className="text-gray-700">
                To provide innovative and energy-efficient cooling solutions that enhance the quality of life for our customers while maintaining environmental responsibility.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Vision</h4>
              <p className="text-gray-700">
                To be the global leader in sustainable cooling technology, setting industry standards for efficiency and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation",
              description: "Continuously pushing boundaries to develop cutting-edge cooling solutions",
              icon: "🔬"
            },
            {
              title: "Quality",
              description: "Maintaining the highest standards in all our products and services",
              icon: "⭐"
            },
            {
              title: "Sustainability",
              description: "Committed to environmental responsibility and energy efficiency",
              icon: "🌱"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">{value.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Global Presence</h3>
          <p className="text-lg text-gray-700 mb-4">
            With a strong presence in over 100 countries, Aufit has established itself as a trusted brand in the global HVAC industry. Our international network includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Manufacturing facilities in 5 countries</li>
            <li>Distribution networks across Asia, Europe, and Americas</li>
            <li>Service centers in major cities worldwide</li>
            <li>Research and development centers in 3 continents</li>
          </ul>
        </div>
        <div>
          <Image
            src="/about_aufit/aux_global presence.jpg"
            alt="Global Presence"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;