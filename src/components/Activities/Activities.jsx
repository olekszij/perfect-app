import Header from './Header';
import NavigationButtons from './../NavigationButtons/NavigationButtons';
import { useRef } from 'react';

const Activities = () => {
  const activities = [
    {
      label: 'Custom Activities',
      description: 'Tailored experiences for your unique needs.',
      href: '#activities-custom',
      image: '/images/custom.jpg',
    },
    {
      label: 'Activities for Children',
      description: 'Fun and engaging activities for kids in Paris.',
      href: '#children',
      image: '/images/children.jpg',
    },
    {
      label: 'Visit the Château',
      description: 'Exclusive tours to explore historic French châteaus.',
      href: '#chateau',
      image: '/images/chateau.jpg',
    },
    {
      label: 'Romantic Getaways',
      description: 'Perfect plans for romantic weekends in Paris.',
      href: '#romantic',
      image: '/images/romantic.jpg',
    },
    {
      label: 'Custom Perfume Creation',
      description: 'Experience the art of creating your own personalized fragrance guided by master perfumers in Paris.',
      href: '#custom-perfume',
      image: '/images/custom-perfume.jpg',
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth; // Ширина карточки
      sliderRef.current.scrollBy({
        left: -cardWidth, // Прокрутка ровно на одну карточку
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth; // Ширина карточки
      sliderRef.current.scrollBy({
        left: cardWidth, // Прокрутка ровно на одну карточку
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
       

        {/* Навигационные кнопки */}
        <div className="flex justify-between items-center mb-4">
        <Header title="Personalized Experiences" />
          <NavigationButtons onLeftClick={scrollLeft} onRightClick={scrollRight} />
        </div>

        {/* Горизонтальный список */}
        <div
          ref={sliderRef}
          className="overflow-x-auto flex space-x-4 snap-x snap-mandatory lg:scrollbar-hide"
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg flex-shrink-0 w-full sm:w-80 snap-center"
            >
              <img
                src={activity.image}
                alt={activity.label}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg">{activity.label}</h4>
                <p className="text-gray-500 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
