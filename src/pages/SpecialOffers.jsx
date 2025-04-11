import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHotel,
  faShip,
  faTicketAlt,
  faEuroSign,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal/Modal";
import BookingForm from "../components/BookingForm/BookingForm";

const SpecialOffers = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const offer = {
    title: "Romantic Trip to Paris",
    description:
      "Make your wedding unforgettable with our exclusive Paris package. Enjoy private transportation, a luxury hotel stay, and romantic activities designed to create lifelong memories.",
    features: [
      {
        icon: faCar,
        title: "Premium Transport",
        text: "Two days of private chauffeur service in a premium vehicle.",
      },
      {
        icon: faHotel,
        title: "Luxury Stay",
        text: "Accommodation in a luxury hotel in the heart of Paris.",
      },
      {
        icon: faShip,
        title: "Seine Cruise",
        text: "Exclusive activities for two: a romantic Seine river cruise.",
      },
      {
        icon: faTicketAlt,
        title: "Priority Access",
        text: "Priority Eiffel Tower tickets and more.",
      },
    ],
    images: [
      "/images/romatic-paris.jpg",
      "/images/business-class.jpg",
      "/images/romantic.jpg",
    ],
    price: "999",
    duration: "2 days",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Special Package
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {offer.title}
          </h1>
          <p className="text-xl text-gray-600">
            {offer.description}
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Featured Image */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 h-[400px]">
            <img
              src={offer.images[0]}
              alt="Romantic Paris Package"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Package Details Card */}
          <div className="bg-blue-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 text-2xl" />
                <h2 className="text-2xl font-bold text-gray-900">Package Details</h2>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600" />
                    <span className="text-gray-600">{offer.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEuroSign} className="text-blue-600" />
                    <span className="text-gray-600">From €{offer.price}</span>
                  </div>
                </div>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition-colors text-lg font-medium mt-auto"
                >
                  Book Package
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Images */}
          {offer.images.slice(1).map((image, index) => (
            <div key={index} className="rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 h-64">
              <img
                src={image}
                alt={`Package image ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Features Grid */}
          {offer.features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.title === "Priority Access"
                ? "bg-rose-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-8 before:bg-white before:rounded-r-full after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-4 after:h-8 after:bg-white after:rounded-l-full"
                : "bg-gray-50 p-6 sm:p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300"
                }`}
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className={`${feature.title === "Priority Access"
                  ? "text-rose-600"
                  : "text-gray-800"
                  } text-3xl mb-4`}
              />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Romantic Trip?</h2>
            <p className="text-gray-600 mb-6">
              Create unforgettable memories in the city of love
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

export default SpecialOffers;
