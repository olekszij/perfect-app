import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import Modal from './Modal/Modal';
import BookingForm from './BookingForm/BookingForm';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const servicesRef = useRef(null);
  const userMenuRef = useRef(null);
  const { t } = useLanguage();
  const { isAuthenticated, logout, user } = useAuth();

  // Debug logging
  useEffect(() => {
    console.log('Auth state:', { isAuthenticated, user });
  }, [isAuthenticated, user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  const menuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: t('myAccount'),
      link: '/dashboard'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      label: t('myReservations'),
      link: '/reservations'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('myAddresses'),
      link: '/addresses'
    }
  ];

  const renderUserMenu = () => {
    if (!isAuthenticated) {
      return (
        <>
          <div className="text-xl font-semibold mb-4">{t('connectToAccount')}</div>
          <p className="text-sm text-gray-600 mb-6">{t('personalizedExperience')}</p>
          <div className="space-y-4 mb-6">
            <Link
              to="/login"
              className="block w-full text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={() => setIsUserMenuOpen(false)}
            >
              {t('login')}
            </Link>
            <Link
              to="/register"
              className="block w-full text-center border border-black text-black px-4 py-2 rounded hover:bg-gray-100"
              onClick={() => setIsUserMenuOpen(false)}
            >
              {t('register')}
            </Link>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="text-xl font-semibold mb-4">
          {t('welcome')}, {user?.firstName || user?.name || t('user')}!
        </div>
        <div className="space-y-2 mb-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-150"
              onClick={() => setIsUserMenuOpen(false)}
            >
              <span className="text-gray-500 mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 my-4"></div>
        <button
          onClick={handleLogout}
          className="w-full text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          {t('logout')}
        </button>
      </>
    );
  };

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Perfect Cab
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className="flex items-center space-x-1 text-gray-800 hover:text-black"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>{t('services')}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <Link
                    to="/hourly-hire"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {t('hourlyHire')}
                  </Link>
                  <Link
                    to="/city-to-city"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {t('cityToCity')}
                  </Link>
                  <Link
                    to="/airport-transfers"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {t('airportTransfers')}
                  </Link>
                  <Link
                    to="/wedding-chauffeur"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {t('weddingChauffeur')}
                  </Link>
                  <Link
                    to="/fashion-week"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {t('fashionWeek')}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/fleet" className="text-gray-800 hover:text-black">
              {t('fleet')}
            </Link>
            <Link to="/special-offers" className="text-gray-800 hover:text-black">
              {t('specialOffers')}
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-black">
              {t('contact')}
            </Link>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Book a Ride Button */}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Book a Ride
            </button>

            <LanguageSwitcher />
            
            {/* User Menu Dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {isAuthenticated ? (user?.firstName || user?.name || t('myAccount')) : t('seConnecter')}
                </span>
              </button>

              {isUserMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-6 px-4"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {renderUserMenu()}

                  {/* Help Link */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link
                      to="/help"
                      className="flex items-center text-gray-600 hover:text-black"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {t('needHelp')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
        <BookingForm />
      </Modal>
    </nav>
  );
};

export default Navbar; 