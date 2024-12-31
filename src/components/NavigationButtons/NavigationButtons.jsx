const NavigationButtons = ({ onLeftClick, onRightClick }) => {
    return (
      <div className="flex gap-4">
        <button
          onClick={onLeftClick}
          className="bg-white text-gray-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-700 hover:text-white transition-all duration-200 opacity-80 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={onRightClick}
          className="bg-white text-gray-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-700 hover:text-white transition-all duration-200 opacity-80 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };
  
  export default NavigationButtons;
  