
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faMapMarkedAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const FashionWeekChauffeur = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Fashion Week 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Exclusive Fashion Week Transport Experience
          </h1>
          <p className="text-xl text-gray-600">
            Navigate Paris Fashion Week in style with our premium chauffeur service
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Service */}
          <div className="bg-indigo-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Premium Fleet</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  Choose from our collection of luxury vehicles, each maintained to perfection
                  and equipped with premium amenities for your comfort.
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/fleet'}
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Explore our fleet →
              </button>
            </div>
          </div>

          {/* Vertical Image Card */}
          <div className="row-span-2 overflow-hidden rounded-3xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg">
            <img
              src="/images/fashion-week-chauffeur.jpg"
              alt="Luxury Chauffeur Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Stats Card */}
          <div className="bg-gray-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6">Service Coverage</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Available 24/7</span>
                <span className="text-black font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Priority Booking</span>
                <span className="text-black font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Multiple Stops</span>
                <span className="text-black font-medium">✓</span>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="bg-purple-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <FontAwesomeIcon icon={faCalendarCheck} className="text-purple-600 text-2xl mb-4" />
            <h3 className="text-xl font-bold mb-3">Show Schedule</h3>
            <p className="text-gray-600">
              Coordinated with Fashion Week calendar for seamless transportation between venues
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-600 text-2xl mb-4" />
            <h3 className="text-xl font-bold mb-3">Route Optimization</h3>
            <p className="text-gray-600">
              Smart routing to avoid traffic and ensure timely arrivals at all shows
            </p>
          </div>

          {/* Large Feature Card */}
          <div className="lg:col-span-2 bg-gradient-to-r from-rose-50 to-teal-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Dedicated Fashion Week Service</h2>
                <p className="text-gray-600 mb-6">
                  Experience a service tailored specifically for Fashion Week attendees.
                  From front-row access points to after-party venues, we know the best routes
                  and protocols.
                </p>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-amber-50 p-8 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
            <FontAwesomeIcon icon={faClock} className="text-amber-600 text-2xl mb-4" />
            <h3 className="text-xl font-bold mb-3">Flexible Hours</h3>
            <p className="text-gray-600">
              Available for early morning shows and late-night events
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready for Fashion Week?</h2>
            <p className="text-gray-600 mb-6">
              Secure your luxury transportation service now
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Reserve Your Chauffeur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <FontAwesomeIcon icon={icon} className="text-2xl text-gray-900" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

Feature.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FashionWeekChauffeur;
