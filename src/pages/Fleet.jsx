import { useState } from 'react';
import serviceClassesData from '../components/ServiceClasses/serviceClassesData'; // Убедитесь, что путь верен
import Card from '../components/Card/Card'; // Ваш компонент карточки
import ServiceClassDetail from '../components/ServiceClasses/ServiceClassDetail';

const Fleet = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleCardClick = (serviceClass) => {
    console.log("Card clicked:", serviceClass); // Проверка клика
    setSelectedClass(serviceClass);
  };

  const handleCloseDetail = () => {
    setSelectedClass(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Fleet</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
          {serviceClassesData.filter(serviceClass => serviceClass.title !== 'Electric Class').map((serviceClass, index) => (
            <Card
              key={index}
              title={serviceClass.title}
              image={serviceClass.image}
              onClick={() => handleCardClick(serviceClass)}
            />
          ))}
        </div>
      </div>

      {selectedClass && (
        <ServiceClassDetail
          serviceClass={selectedClass}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default Fleet;
