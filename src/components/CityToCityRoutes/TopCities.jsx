import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faClock } from '@fortawesome/free-solid-svg-icons';

const TopCities = ({ cities }) => {
  return (
    <div>
      <div className="flex space-x-4 overflow-x-auto lg:scrollbar-hide">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg flex-shrink-0 w-72"
          >
            <img
              src={`/images/${city.name.toLowerCase()}.jpg`}
              alt={city.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
  <h4 className="font-bold text-xl mb-2">{city.name}</h4>
  <p className="text-gray-500 text-sm flex items-center">
    <FontAwesomeIcon icon={faRoad} className="mr-2 text-gray-800" />
    {city.distance} km
  </p>
  <p className="text-gray-500 text-sm flex items-center">
    <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-800" />
    {city.time}
  </p>
  <p className="text-lg font-extrabold text-gray-900 my-2">From {city.price}€</p>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCities;

