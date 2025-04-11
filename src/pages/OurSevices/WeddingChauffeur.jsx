import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRing,
  faClock,
  faCar,
  faEuroSign,
  faGlassCheers,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/Modal";
import BookingForm from "../../components/BookingForm/BookingForm";

const WeddingChauffeur = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const services = [
    {
      title: 'Classic Elegance',
      description: 'The perfect choice for intimate ceremonies. Arrive in style with our Mercedes S-Class, complete with elegant floral decorations and champagne service.',
      price: 'from €450',
      duration: '4 hours',
      vehicle: 'Mercedes S-Class'
    },
    {
      title: 'Royal Experience',
      description: 'Make a grand entrance in our Rolls-Royce. Includes premium decoration, Dom Pérignon champagne, and professional photo session with the car.',
      price: 'from €850',
      duration: '8 hours',
      vehicle: 'Rolls-Royce Phantom'
    },
    {
      title: 'Imperial Collection',
      description: 'The ultimate luxury fleet for your perfect day. Two prestigious vehicles, dedicated coordinator, and VIP services throughout the celebration.',
      price: 'from €1450',
      duration: '12 hours',
      vehicle: 'Rolls-Royce + Mercedes'
    }
  ];

  const features = [
    {
      icon: faCar,
      title: 'Prestigious Fleet',
      description: 'Our collection features the latest models from Rolls-Royce, Bentley, and Mercedes-Benz S-Class, each meticulously maintained for your special day.',
      bgImage: "/images/luxury-fleet.jpg"
    },
    {
      icon: faCalendarCheck,
      title: 'Perfect Timing',
      description: 'Our wedding specialists ensure flawless coordination with your schedule, from morning preparation to midnight departure.',
      bgImage: "/images/wedding-planning.jpg"
    },
    {
      icon: faGlassCheers,
      title: 'Royal Treatment',
      description: 'Enjoy premium champagne service, red carpet ceremonies, and professional chauffeurs in formal attire dedicated to your comfort.',
      bgImage: "/images/premium-service.jpg"
    }
  ];

  const coveragePoints = [
    { text: 'Available 24/7 for Your Schedule', checked: true },
    { text: 'Multiple Ceremony & Photo Locations', checked: true },
    { text: 'Luxury Backup Vehicle Included', checked: true },
    { text: 'Professional Photography Session', checked: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Luxury Wedding Transport 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Wedding Journey into a Fairytale
          </h1>
          <p className="text-xl text-gray-600">
            Experience the epitome of luxury transportation on your special day, where every moment becomes an unforgettable memory
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Service */}
          <div className="bg-rose-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <FontAwesomeIcon icon={faRing} className="text-rose-600 text-2xl" />
                  <h2 className="text-2xl font-bold text-gray-900">Luxury Fleet</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  Step into a world of luxury with our handpicked collection of prestigious vehicles. Each car is adorned with elegant decorations and equipped with premium amenities for your comfort.
                </p>
              </div>
              <button
                onClick={openBookingModal}
                className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700"
              >
                Discover our collection →
              </button>
            </div>
          </div>

          {/* Vertical Image Card */}
          <div className="row-span-2 overflow-hidden rounded-3xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg">
            <img
              src="/images/wedding-chauffeur.jpg"
              alt="Luxury Rolls-Royce Wedding Car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Stats Card */}
          <div className="bg-gray-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6">Premium Coverage</h3>
            <div className="space-y-4">
              {coveragePoints.map((point, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{point.text}</span>
                  <span className="text-black font-medium">✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Features */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={feature.bgImage}
                  alt=""
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/80"></div>
              </div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={feature.icon} className="text-gray-800 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}

          {/* Large Feature Card */}
          <div className="lg:col-span-2 bg-gradient-to-r from-rose-50 to-purple-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Your Perfect Wedding Journey</h2>
                <p className="text-gray-600 mb-6">
                  From the first morning preparations to your grand evening departure, we orchestrate every journey with precision and elegance. Our dedicated team works seamlessly with your wedding planners, ensuring each transition is as perfect as your special day deserves.
                </p>
                <button
                  onClick={openBookingModal}
                  className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Plan Your Wedding Transport
                </button>
              </div>
              <div className="w-full md:w-2/5">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/wedding-couple.jpg"
                    alt="Elegant Wedding Couple"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Options */}
          <div className="lg:col-span-3 bg-white p-8 rounded-3xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Curated Wedding Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faEuroSign} className="text-gray-600" />
                      <span className="font-bold">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faClock} className="text-gray-600" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{service.vehicle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Create Your Wedding Story?</h2>
            <p className="text-gray-600 mb-6">
              Let us make your wedding transportation as extraordinary as your love story
            </p>
            <button
              onClick={openBookingModal}
              className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isBookingModalOpen} onClose={closeBookingModal}>
        <BookingForm />
      </Modal>
    </div>
  );
};

export default WeddingChauffeur;
