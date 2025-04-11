import { useState } from 'react';
import Card from '../Card/Card';
import serviceClassesData from './serviceClassesData'; // Импорт данных
import ServiceClassDetail from './ServiceClassDetail'; // Компонент для отображения подробностей

const ServiceClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null); // Состояние для выбранного класса

  const handleCardClick = (serviceClass) => {
    setSelectedClass(serviceClass); // Устанавливаем выбранный класс
  };

  const handleCloseDetail = () => {
    setSelectedClass(null); // Закрываем окно с информацией
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <h2 className="text-3xl font-bold text-center mb-8">Fleet</h2>

        {/* Карточки классов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {serviceClassesData.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
              onClick={() => handleCardClick(service)} // Добавляем обработчик клика
            />
          ))}
        </div>


      </div>

      {/* Компонент с дополнительной информацией */}
      {selectedClass && (
        <ServiceClassDetail
          serviceClass={selectedClass}
          onClose={handleCloseDetail}
        />
      )}
    </section>
  );
};

export default ServiceClasses;
