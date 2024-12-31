import CityToCityRoutes from "../../components/CityToCityRoutes/CityToCityRoutes";

const CityToCityRides = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Заголовок и описание */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Long-Distance Chauffeured Rides
        </h1>
        <h2 className="text-2xl font-semibold text-black/70">
          The Better Way Between Cities
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Say goodbye to the stress of short-haul flights, regional trains, or car rentals. 
          Enjoy the comfort, convenience, and luxury of private, city-to-city rides with our chauffeur service. 
          Here’s why our service is the perfect alternative to other means of transport:
        </p>
      </div>

      {/* Список преимуществ */}
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 space-y-6">
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-start">
            <span className="mr-3 text-black/70 text-2xl">✓</span>
            <p>
              <strong>Save Time:</strong> Door-to-door rides eliminate waiting in lines, transfers, and delays.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-black/70 text-2xl">✓</span>
            <p>
              <strong>Set Your Schedule:</strong> Choose your pickup time and enjoy the flexibility to cancel up to 1 hour before your ride.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-black/70 text-2xl">✓</span>
            <p>
              <strong>Travel in Comfort:</strong> Premium vehicles with ample trunk space, offering peace and privacy throughout your journey.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-black/70 text-2xl">✓</span>
            <p>
              <strong>Competitive Pricing:</strong> Pay per car, not per seat, with all taxes and tolls included.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-black/70 text-2xl">✓</span>
            <p>
              <strong>Stay Productive:</strong> Ideal for business trips, with Wi-Fi available in most locations.
            </p>
          </li>
        </ul>
      </div>

      {/* Секция маршрутов */}
      <CityToCityRoutes />
    </div>
  );
};

export default CityToCityRides;
