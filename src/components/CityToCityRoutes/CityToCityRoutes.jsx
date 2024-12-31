import TopCities from './TopCities';
import NavigationButtons from "./../NavigationButtons/NavigationButtons";
import { useRef } from "react";
import Header from "./Header";

const CityToCityRoutes = () => {
  const cities = [
    { name: "London", distance: 469, time: "4h 17m", price: 500 },
    { name: "Brussels", distance: 306, time: "3h 18m", price: 350 },
    { name: "Amsterdam", distance: 500, time: "5h 22m", price: 450 },
    { name: "Geneva", distance: 540, time: "5h 8m", price: 500 },
  ];
  

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
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        

        {/* Добавление кнопок навигации */}
        <div className="flex justify-between items-center mb-6">
          <Header  title="City-to-City routes"/>
          <NavigationButtons onLeftClick={scrollLeft} onRightClick={scrollRight} />
        </div>

        {/* Обёртка для TopCities с прокруткой */}
        <div ref={sliderRef} className="overflow-x-auto space-x-4 flex lg:scrollbar-hide">
          <TopCities cities={cities} />
        </div>
      </div>
    </section>
  );
};

export default CityToCityRoutes;
