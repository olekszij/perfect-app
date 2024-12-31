import { useState, useEffect, useRef } from "react";
import Form from "./Form";

const MenuForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleFormVisibility = () => {
    setIsVisible(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Если форма видима и кликнули не по ней, закрываем форму
      if (
        isVisible &&
        formRef.current &&
        !formRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      // Добавляем обработчик только когда форма открыта
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      // Удаляем обработчик при размонтировании или при закрытии формы
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="relative">
      {!isVisible && (
        <button
          ref={buttonRef}
          onClick={toggleFormVisibility}
          className="bg-black text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-gray-800 transition"
        >
          Book a Ride
        </button>
      )}

      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            ref={formRef}
            className="bg-white p-4 sm:p-6 shadow-lg rounded-lg w-[90%] max-w-md"
          >
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuForm;
