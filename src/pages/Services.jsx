import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hourly & Full Day Hire */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Hourly & Full Day Hire</h3>
              <p className="text-gray-600 mb-4">
                Flexible transportation solutions for your time in the city. Book by the hour or for a full day.
              </p>
              <Link
                to="/services/hourly"
                className="inline-block text-black font-medium hover:text-gray-700"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* City to City Rides */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">City to City Rides</h3>
              <p className="text-gray-600 mb-4">
                Comfortable intercity travel with professional drivers and luxury vehicles.
              </p>
              <Link
                to="/services/city"
                className="inline-block text-black font-medium hover:text-gray-700"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Airport Transfers */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Airport Transfers</h3>
              <p className="text-gray-600 mb-4">
                Reliable and punctual airport pickup and drop-off services.
              </p>
              <Link
                to="/services/airport"
                className="inline-block text-black font-medium hover:text-gray-700"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Wedding Chauffeur */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Wedding Chauffeur</h3>
              <p className="text-gray-600 mb-4">
                Make your special day even more memorable with our luxury wedding transportation.
              </p>
              <Link
                to="/services/wedding"
                className="inline-block text-black font-medium hover:text-gray-700"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Fashion Week Chauffeur */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Fashion Week Chauffeur</h3>
              <p className="text-gray-600 mb-4">
                Premium transportation services for fashion events and shows.
              </p>
              <Link
                to="/services/fashion"
                className="inline-block text-black font-medium hover:text-gray-700"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 