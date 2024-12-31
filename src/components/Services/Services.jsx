import { useRef } from "react";
import NavigationButtons from "./../NavigationButtons/NavigationButtons";

export const servicesData = [
  {
    title: "Hourly and full day hire",
    description:
      "For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort.",
    image: "/images/hourly-hire.jpg",
    link: "/hourly-and-full-day-hire", // Ссылка на страницу
  },
  {
    title: "City-to-city rides",
    description:
      "Your stress-free solution for long-distance rides with professional chauffeurs across the globe.",
    image: "/images/city-to-city.jpg",
    link: "/city-to-city-rides", // Ссылка на страницу
  },
  {
    title: "Airport transfers",
    description:
      "With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.",
    image: "/images/airport-transfers.jpg",
    link: "/airport-transfers", // Ссылка на страницу
  },
  {
    title: "Wedding Chauffeur",
    description:
      "Make your special day unforgettable with our professional wedding chauffeur service. Enjoy luxury, comfort, and reliability, tailored for your wedding needs.",
    image: "/images/wedding-chauffeur.jpg",
    link: "/wedding-chauffeur", // Ссылка на страницу
  },
  {
    title: "Fashion Week Chauffeur",
    description:
      "Arrive in style and on time with our exclusive chauffeur service for Paris Fashion Week. Experience luxury and elegance tailored to your event needs.",
    image: "/images/fashion-week-chauffeur.jpg",
    link: "/fashion-week-chauffeur", // Ссылка на страницу
  },
];

const Services = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-100 py-12 relative">
      <div className="container mx-auto px-6">
        {/* Заголовок с кнопками */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <NavigationButtons
            onLeftClick={scrollLeft}
            onRightClick={scrollRight}
          />
        </div>

        {/* Слайдер */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 lg:scrollbar-hide snap-x snap-mandatory px-4"
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 w-80 snap-start"
            >
              {/* Изображение */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-gray-800 font-semibold hover:underline mt-4 inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
