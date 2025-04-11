import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faClock,
  faShieldAlt,
  faEuroSign,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal/Modal";
import BookingForm from "../components/BookingForm/BookingForm";

const AirportTransfers = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const features = [
    {
      title: "Timely Pickups",
      description: "Enjoy peace of mind knowing that our chauffeurs arrive on time, every time.",
      image: "/images/airport-transfers.jpg",
      icon: faClock,
    },
    {
      title: "Flight Tracking",
      description: "Our advanced systems monitor your flight status to adjust for any delays or early arrivals.",
      image: "/images/beauvais-airport.jpg",
      icon: faPlane,
    },
    {
      title: "Luxury Vehicles",
      description: "Travel in style and comfort with our premium fleet of vehicles, suited for all needs.",
      image: "/images/business-class.jpg",
      icon: faCarSide,
    },
  ];

  const airports = [
    {
      name: "Paris - Orly Airport (ORY)",
      distance: "18 km",
      time: "30 minutes",
      price: "80",
      image: "/images/orly-airport.jpg",
      description: "Quick and convenient transfers to Orly Airport with fixed pricing."
    },
    {
      name: "Paris - Charles de Gaulle (CDG)",
      distance: "25 km",
      time: "40 minutes",
      price: "85",
      image: "/images/charles-de-gaulle.jpg",
      description: "Direct transfers to CDG with flight tracking and meet & greet service."
    },
    {
      name: "Paris - Beauvais Airport (BVA)",
      distance: "85 km",
      time: "1 hour 15 minutes",
      price: "160",
      image: "/images/beauvais-airport.jpg",
      description: "Comfortable transfers to Beauvais Airport with professional drivers."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Airport Transfers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Airport Transfer Service
          </h1>
          <p className="text-xl text-gray-600">
            Seamless airport transfers to and from all Paris airports
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Featured Card */}
          <div className="md:col-span-1 bg-blue-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faPlane} className="text-blue-600 text-2xl" />
                <h2 className="text-2xl font-bold text-gray-900">CDG Airport Transfer</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Direct transfers to and from Charles de Gaulle Airport. Professional chauffeurs,
                luxury vehicles, and flight tracking included.
              </p>
              <div className="relative rounded-xl overflow-hidden h-48">
                <img
                  src="/images/charles-de-gaulle.jpg"
                  alt="CDG Airport Transfer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-blue-600" />
                  <span className="text-gray-600">45 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEuroSign} className="text-blue-600" />
                  <span className="text-gray-600">From €89</span>
                </div>
              </div>
              <button
                onClick={openBookingModal}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Book transfer
              </button>
            </div>
          </div>

          {/* Service Guarantees */}
          <div className="md:col-span-1 bg-rose-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col h-full">
              <FontAwesomeIcon icon={faShieldAlt} className="text-rose-600 text-2xl mb-4" />
              <h3 className="text-xl font-bold mb-8">Service Guarantees</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-lg">Meet & Greet</span>
                  <span className="text-black font-medium">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-lg">Flight Tracking</span>
                  <span className="text-black font-medium">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-lg">Free Waiting Time</span>
                  <span className="text-black font-medium">✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Airport Cards Stack */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {airports.map((airport, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="sm:w-1/3">
                      <div className="relative rounded-xl overflow-hidden">
                        <img
                          src={airport.image}
                          alt={airport.name}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="sm:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <FontAwesomeIcon icon={faPlane} className="text-gray-600 text-2xl" />
                        <h3 className="text-xl font-bold">{airport.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{airport.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div>
                          <span className="text-gray-600 block mb-1">Distance</span>
                          <span className="font-medium">{airport.distance}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block mb-1">Duration</span>
                          <span className="font-medium">{airport.time}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block mb-1">From</span>
                          <span className="font-medium">€{airport.price}</span>
                        </div>
                      </div>
                      <button
                        onClick={openBookingModal}
                        className="w-full sm:w-auto px-8 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Features */}
          <div className="md:col-span-2 bg-gradient-to-r from-gray-50 to-gray-100 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our Airport Transfer Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <FontAwesomeIcon icon={feature.icon} className="text-gray-800 text-3xl mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Airport Transfer?</h2>
            <p className="text-gray-600 mb-6">
              Secure your hassle-free airport transfer today
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

export default AirportTransfers;
