// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSuitcase,
  faUsers,
  faBriefcase,
  faUserGroup,
  faLocationDot,
  faLeaf,
  faTimes,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const getIcon = (iconName) => {
  const icons = {
    user: faUser,
    users: faUsers,
    suitcase: faSuitcase,
    suitcases: faBriefcase,
    group: faUserGroup,
    location: faLocationDot,
    leaf: faLeaf
  };
  return icons[iconName] || faUser;
};

const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
  >
    <FontAwesomeIcon icon={faChevronLeft} className="text-white text-lg" />
  </button>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func
};

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
  >
    <FontAwesomeIcon icon={faChevronRight} className="text-white text-lg" />
  </button>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func
};

const ServiceClassDetail = ({ serviceClass, onClose }) => {
  if (!serviceClass) return null;

  const { title, image, description, features, price, cars } = serviceClass;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-4xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[98vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-200 z-10"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="w-full md:w-1/2 relative h-[35vh] md:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-6">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-1">{title}</h2>
            <p className="text-gray-200 text-sm md:text-lg line-clamp-2">{description}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-3 md:p-6 flex flex-col h-[calc(65vh-2rem)] md:h-auto">
          <div className="mb-4 md:mb-6">
            <div className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              <span className="text-sm md:text-lg text-gray-600 mr-2">{price.prefix}</span>
              {price.currency}{price.amount}<span className="text-sm md:text-lg text-gray-600">/hour</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center bg-gray-50 rounded-xl p-2 md:p-6 md:flex-col md:aspect-square"
                >
                  <FontAwesomeIcon
                    icon={getIcon(feature.icon)}
                    className="text-gray-700 w-5 h-5 md:w-8 md:h-8 md:mb-3 mr-2 md:mr-0"
                  />
                  <span className="text-gray-600 text-xs md:text-base text-center">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {cars && cars.length > 0 && (
            <div className="mt-auto">
              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">Available vehicles</h3>
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                prevArrow={<CustomPrevArrow />}
                nextArrow={<CustomNextArrow />}
                className="relative"
              >
                {cars.map((car, index) => (
                  <div key={index} className="outline-none px-1">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 md:p-4">
                        <h4 className="text-white text-base md:text-xl font-semibold">{car.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ServiceClassDetail.propTypes = {
  serviceClass: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired,
    price: PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      prefix: PropTypes.string.isRequired
    }).isRequired,
    cars: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
  }),
  onClose: PropTypes.func.isRequired,
};

export default ServiceClassDetail;
