import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHotel,
  faShip,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

const SpecialOffers = () => {
  const offer = {
    title: "Romantic Trip to Paris",
    description:
      "Make your wedding unforgettable with our exclusive Paris package. Enjoy private transportation, a luxury hotel stay, and romantic activities designed to create lifelong memories.",
    features: [
      {
        icon: faCar,
        text: "Two days of private chauffeur service in a premium vehicle.",
      },
      {
        icon: faHotel,
        text: "Accommodation in a luxury hotel in the heart of Paris.",
      },
      {
        icon: faShip,
        text: "Exclusive activities for two: a romantic Seine river cruise.",
      },
      {
        icon: faTicketAlt,
        text: "Priority Eiffel Tower tickets and more.",
      },
    ],
    images: [
      "/images/romantic.jpg",
      "/images/business-class.jpg",
      "/images/wedding-chauffeur.jpg",
    ],
    price: "Starting from €999 for two",
  };

  return (
    <div className="container mx-auto p-6">
      {/* Заголовок и описание */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">{offer.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {offer.description}
        </p>
        <p className="text-xl font-bold text-gray-900 mt-4">{offer.price}</p>
      </div>

      {/* Изображения */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {offer.images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt={`Offer image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Что включено */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">What's Included</h2>
        <ul className="space-y-4 text-gray-800 mx-auto max-w-3xl">
          {offer.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-4">
              <FontAwesomeIcon icon={feature.icon} className="text-black text-xl" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecialOffers;
