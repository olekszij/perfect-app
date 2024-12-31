import { useState, useEffect, useRef } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "EN", label: "English" },
    { code: "FR", label: "Français" },
    { code: "RU", label: "Русский" },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Кнопка глобуса */}
      <button
        className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2C9.243 4.957 7.757 8.228 7.757 12c0 3.772 1.486 7.043 4.243 10M12 2c2.757 2.957 4.243 6.228 4.243 10 0 3.772-1.486 7.043-4.243 10"
          />
        </svg>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <ul
          className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-40 right-0"
          role="menu"
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100"
                onClick={() => handleLanguageChange(lang.code)}
                role="menuitem"
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
