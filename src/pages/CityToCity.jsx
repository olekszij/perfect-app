import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faClock,
  faShieldAlt,
  faEuroSign,
  faMapMarkedAlt,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal/Modal";
import BookingForm from "../components/BookingForm/BookingForm";

const CityToCity = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const popularRoutes = [
    { from: "Paris", to: "London", distance: "469 km", time: "4h 17m", price: "500" },
    { from: "Paris", to: "Brussels", distance: "306 km", time: "3h 18m", price: "350" },
    { from: "Paris", to: "Amsterdam", distance: "500 km", time: "5h 22m", price: "450" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Intercity Travel
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            City-to-City Chauffeur Service
          </h1>
          <p className="text-xl text-gray-600">
            Travel between cities in comfort and style with our premium chauffeur service
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Route Card */}
          <div className="lg:col-span-2 bg-rose-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <FontAwesomeIcon icon={faRoute} className="text-rose-600 text-3xl" />
                  <h2 className="text-2xl font-bold text-gray-900">Paris ↔ London</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  Our most popular route connecting two of Europe&apos;s most iconic capitals.
                  Enjoy a seamless journey with our professional chauffeurs.
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-rose-600" />
                    <span className="text-gray-600">4h 17m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faEuroSign} className="text-rose-600" />
                    <span className="text-gray-600">From €500</span>
                  </div>
                </div>
                <button
                  onClick={openBookingModal}
                  className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700"
                >
                  Book this route →
                </button>
              </div>
              <div className="w-full md:w-2/5">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/london.jpg"
                    alt="Paris to London"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-blue-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-2xl mb-4" />
            <h3 className="text-xl font-bold mb-6">Service Guarantees</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Fixed Pricing</span>
                <span className="text-black font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">24/7 Support</span>
                <span className="text-black font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Free Cancellation</span>
                <span className="text-black font-medium">✓</span>
              </div>
            </div>
          </div>

          {/* Popular Routes Grid */}
          {popularRoutes.map((route, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-gray-600 text-2xl" />
                <h3 className="text-xl font-bold">{route.from} → {route.to}</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Distance</span>
                  <span className="font-medium">{route.distance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{route.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">From</span>
                  <span className="font-medium">€{route.price}</span>
                </div>
              </div>
              <button
                onClick={openBookingModal}
                className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Book Now
              </button>
            </div>
          ))}

          {/* Service Features */}
          <div className="lg:col-span-3 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our City-to-City Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <FontAwesomeIcon icon={faCarSide} className="text-gray-800 text-3xl mb-4" />
                <h3 className="text-lg font-bold mb-2">Premium Vehicles</h3>
                <p className="text-gray-600">Latest model luxury cars for your comfort</p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faClock} className="text-gray-800 text-3xl mb-4" />
                <h3 className="text-lg font-bold mb-2">Flexible Schedule</h3>
                <p className="text-gray-600">Travel at your preferred time</p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faRoute} className="text-gray-800 text-3xl mb-4" />
                <h3 className="text-lg font-bold mb-2">Direct Routes</h3>
                <p className="text-gray-600">No stops or detours unless requested</p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-gray-800 text-3xl mb-4" />
                <h3 className="text-lg font-bold mb-2">Safe Travel</h3>
                <p className="text-gray-600">Professional drivers and insured rides</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Journey?</h2>
            <p className="text-gray-600 mb-6">
              Choose your route and schedule your intercity transfer
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

export default CityToCity; 