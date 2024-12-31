import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { servicesData } from "../Services/Services";

const MenuItems = ({ onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuLinks = [
    {
      label: "Our Services",
      href: "services",
      page: "/",
      subMenu: servicesData.map((service) => ({
        label: service.title,
        href: service.link, // Используем правильный путь из servicesData
        page: service.link,
      })),
    },
    { label: "Personalized Experiences", href: "activities", page: "/activities" },
    { label: "Fleet", href: "fleet", page: "/fleet" },
    { label: "Special Offers", href: "special-offers", page: "/special-offers" },
    { label: "FAQ", href: "faq", page: "/faq" },
    { label: "Contact", href: "contact", page: "/contact" },
  ];

  // Подменю закрыто по умолчанию
  const initialOpenState = {};
  menuLinks.forEach((link, index) => {
    if (link.subMenu) {
      initialOpenState[index] = false;
    }
  });

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(initialOpenState);

  const handleNavigation = (page) => {
    if (onClick) onClick(); // Закрываем меню, если передан обработчик
    if (location.pathname !== page) {
      navigate(page);
    }
  };

  const handleToggleSubMenu = (index) => {
    setIsOpenSubMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <ul className="flex flex-col items-center space-y-6 text-lg font-bold text-gray-900">
      {menuLinks.map((link, index) => (
        <li key={index}>
          <button
            onClick={() => {
              if (link.subMenu) {
                handleToggleSubMenu(index);
              } else {
                handleNavigation(link.page);
              }
            }}
            className="block px-4 py-2 text-2xl text-gray-900 hover:text-gray-600 transition duration-200 ease-in-out"
          >
            {link.label}
            {link.subMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`inline-block ml-2 h-5 w-5 transform transition-transform ${
                  isOpenSubMenu[index] ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
          {link.subMenu && isOpenSubMenu[index] && (
            <ul className="flex flex-col items-start space-y-3 mt-2 ml-4">
              {link.subMenu.map((subLink, subIndex) => (
                <li key={subIndex}>
                  <button
                    onClick={() => handleNavigation(subLink.page)}
                    className="block px-4 py-2 text-lg text-gray-800 hover:text-gray-900 transition duration-200 ease-in-out"
                  >
                    {subLink.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
