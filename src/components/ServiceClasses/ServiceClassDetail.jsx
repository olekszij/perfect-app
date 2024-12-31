import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSuitcase, faCoins, faTimes } from '@fortawesome/free-solid-svg-icons';

const ServiceClassDetail = ({ serviceClass, onClose }) => {
  if (!serviceClass) return null;

  const { title, image, description, features, pricePerHour, carModels } = serviceClass;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Закрытие при клике на тёмную область
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative overflow-y-auto max-h-[90vh] sm:max-h-[80vh] mx-4" // Добавлены отступы mx-4
        onClick={(e) => e.stopPropagation()} // Предотвращение закрытия при клике внутри окна
      >
        {/* Кнопка закрытия */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="text-center">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>

          {/* Цена */}
          {pricePerHour && (
            <div className="text-lg font-semibold text-gray-800 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faCoins} className="text-yellow-500 mr-2" />
              {pricePerHour}
            </div>
          )}

          {/* Особенности */}
          <ul className="list-none mb-4 text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 mb-2">
                <FontAwesomeIcon
                  icon={
                    index === 0
                      ? faUser
                      : index === 1
                      ? faSuitcase
                      : faCoins
                  }
                  className="text-gray-800"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Модели машин */}
          {carModels && carModels.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Available Models</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {carModels.map((car, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-24 h-16 object-cover rounded mb-2"
                    />
                    <span className="text-gray-700 text-sm">{car.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceClassDetail;
