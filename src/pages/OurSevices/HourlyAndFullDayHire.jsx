import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGlassCheers,
  faTrophy,
  faSpa,
  faClock,
  faEuroSign,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/Modal";
import BookingForm from "../../components/BookingForm/BookingForm";

const HourlyAndFullDayHire = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const services = [
    {
      title: "Hourly Hire",
      description: "Perfect for business meetings, events, or short trips around the city",
      price: "from 75",
      duration: "Minimum 2 hours",
      image: "/images/hourly-hire.jpg",
    },
    {
      title: "Half Day Hire",
      description: "Ideal for multiple stops, shopping trips, or sightseeing tours",
      price: "from 280",
      duration: "Up to 4 hours",
      image: "/images/half-day-hire.jpg",
    },
    {
      title: "Full Day Hire",
      description: "Complete freedom to explore Paris and its surroundings",
      price: "from 520",
      duration: "Up to 8 hours",
      image: "/images/full-day-hire.jpg",
    },
  ];

  const features = [
    {
      icon: faBriefcase,
      title: "Client meetings",
      description: "Impress your business partners with a professional chauffeur service offering multiple stops and flexible transportation.",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", // Modern office meeting
    },
    {
      icon: faGlassCheers,
      title: "Events and parties",
      description: "Start and end your evening in style with a private chauffeur service for major social gatherings.",
      bgImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80", // Elegant event
    },
    {
      icon: faTrophy,
      title: "Sporting or cultural events",
      description: "Arrive at flagship events, premieres, or galas in comfort and elegance.",
      bgImage: "https://images.unsplash.com/photo-1507666664345-c49223375e33?auto=format&fit=crop&q=80", // Theater or venue
    },
    {
      icon: faSpa,
      title: "Spa and resort visits",
      description: "Relax completely while your chauffeur handles the journey, ensuring you arrive calm and ready.",
      bgImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80", // Luxury spa
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
              Chauffeur Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hourly & Full Day Hire
            </h1>
            <p className="text-xl text-gray-600">
              Flexible chauffeur services tailored to your schedule and needs
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Image - Left Side */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 h-full">
                <div className="relative w-full h-full">
                  <img
                    src="/images/hourly-hire.jpg"
                    alt="Premium Chauffeur Service"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Content Grid - Right Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Main Info Card */}
              <div className="sm:col-span-2 bg-blue-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <FontAwesomeIcon icon={faClock} className="text-blue-600 text-2xl" />
                  <h2 className="text-2xl font-bold text-gray-900">Premium Hourly Service</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  Book your private chauffeur by the hour for maximum flexibility. Perfect for business meetings,
                  shopping trips, or city tours.
                </p>
                <div className="flex items-center justify-between text-lg mb-6">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faClock} className="text-blue-600" />
                    <span className="text-gray-600">Min 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEuroSign} className="text-blue-600" />
                    <span className="text-gray-600">From €75/hour</span>
                  </div>
                </div>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition-colors text-lg font-medium"
                >
                  Book service
                </button>
              </div>

              {/* Service Options Card */}
              <div className="sm:col-span-2 bg-rose-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-rose-600 text-2xl mb-4" />
                <h3 className="text-xl font-bold mb-6">Service Options</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between pb-4 border-b border-rose-100 last:border-0">
                      <div>
                        <h4 className="font-bold text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">€{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Grid - Full Width */}
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={feature.bgImage}
                      alt=""
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/80"></div>
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <FontAwesomeIcon icon={feature.icon} className="text-gray-800 text-3xl mb-4" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Chauffeur?</h2>
            <p className="text-gray-600 mb-6">
              Choose the perfect duration for your needs
            </p>
            <button
              onClick={openBookingModal}
              className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Book Now
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

export default HourlyAndFullDayHire;
