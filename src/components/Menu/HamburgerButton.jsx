const HamburgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="focus:outline-none text-gray-800"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col items-center justify-center space-y-1">
        <span
          className={`block w-6 h-1 bg-gray-800 transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-gray-800 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-gray-800 transition-transform duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerButton;
