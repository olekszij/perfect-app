import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import Modal from './Modal/Modal';
import BookingForm from './BookingForm/BookingForm';

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isServicesOpen, setIsServicesOpen] = useState(window.innerWidth < 768);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);
  const userMenuRef = useRef(null);
  const { t } = useLanguage();
  const { isAuthenticated, logout, user } = useAuth();

  // Debug logging
  useEffect(() => {
    console.log('Auth state:', { isAuthenticated, user });
  }, [isAuthenticated, user]);

  // Update mobile view state
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
      if (isMobile && !isMobileMenuOpen) {
        setIsServicesOpen(true);
      } else if (!isMobile) {
        setIsServicesOpen(false);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle clicks outside services menu (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isMobileView && servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (!isMobileView) {
          setIsServicesOpen(false);
        }
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileView]);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  const handleServiceClick = (path) => {
    if (!isMobileView) {
      setIsServicesOpen(false);
    }
    setIsMobileMenuOpen(false);
    window.location.href = path;
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
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
          <div className="text-2xl font-black mb-3 text-center">{t('connectToAccount')}</div>
          <p className="text-base text-gray-600 mb-6 text-center">{t('personalizedExperience')}</p>
          <div className="space-y-3 mb-4">
            <Link
              to="/login"
              className="block w-full text-center bg-black text-white px-4 py-3 rounded-lg text-base font-bold hover:bg-gray-800"
              onClick={() => setIsUserMenuOpen(false)}
            >
              {t('login')}
            </Link>
            <Link
              to="/register"
              className="block w-full text-center border-2 border-black text-black px-4 py-3 rounded-lg text-base font-bold hover:bg-gray-100"
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
        <div className="text-2xl font-black mb-4 text-center">
          {t('welcome')}, {user?.firstName || user?.name || t('user')}!
        </div>
        <div className="space-y-2 mb-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
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
          className="w-full text-center bg-black text-white px-4 py-3 rounded-lg text-base font-bold hover:bg-gray-800"
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
          <Link to="/" className="text-2xl font-extrabold text-black">
            Perfect Cab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={servicesRef}>
              <button
                className="flex items-center space-x-1 text-gray-800 hover:text-black text-center text-base font-bold"
                onClick={toggleServices}
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

              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="block w-full px-4 py-2 text-base font-bold text-center text-gray-800 hover:bg-gray-100"
                    onClick={() => handleServiceClick('/hourly-hire')}
                  >
                    {t('hourlyHire')}
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-base font-bold text-center text-gray-800 hover:bg-gray-100"
                    onClick={() => handleServiceClick('/city-to-city')}
                  >
                    {t('cityToCity')}
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-base font-bold text-center text-gray-800 hover:bg-gray-100"
                    onClick={() => handleServiceClick('/airport-transfers')}
                  >
                    {t('airportTransfers')}
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-base font-bold text-center text-gray-800 hover:bg-gray-100"
                    onClick={() => handleServiceClick('/wedding-chauffeur')}
                  >
                    {t('weddingChauffeur')}
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-base font-bold text-center text-gray-800 hover:bg-gray-100"
                    onClick={() => handleServiceClick('/fashion-week')}
                  >
                    {t('fashionWeek')}
                  </button>
                </div>
              )}
            </div>

            <Link to="/fleet" className="text-gray-800 hover:text-black text-center text-base font-bold">
              {t('fleet')}
            </Link>
            <Link to="/special-offers" className="text-gray-800 hover:text-black text-center text-base font-bold">
              {t('specialOffers')}
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-black text-center text-base font-bold">
              {t('contact')}
            </Link>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Book a Ride Button (Icon) */}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors p-2 text-lg"
              aria-label="Book a Ride"
            >
              <FontAwesomeIcon icon={faCalendarPlus} />
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100"
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <svg
                  className="w-5 h-5"
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
              </button>

              {isUserMenuOpen && (
                <div className="fixed md:absolute inset-x-0 md:inset-auto top-16 md:top-full md:mt-1 bg-white shadow-lg md:rounded-lg md:w-72 md:right-0 z-50 h-[calc(100vh-4rem)] md:h-auto overflow-y-auto">
                  <div className="max-w-7xl mx-auto px-4 py-4">
                    {renderUserMenu()}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-white h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <div className="relative rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-xl font-bold text-gray-800 bg-gray-50"
                  onClick={toggleServices}
                >
                  <span>{t('services')}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="py-2 px-4 bg-white border-t border-gray-200">
                    <button
                      className="block w-full py-3 text-left text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => handleServiceClick('/hourly-hire')}
                    >
                      {t('hourlyHire')}
                    </button>
                    <button
                      className="block w-full py-3 text-left text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => handleServiceClick('/city-to-city')}
                    >
                      {t('cityToCity')}
                    </button>
                    <button
                      className="block w-full py-3 text-left text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => handleServiceClick('/airport-transfers')}
                    >
                      {t('airportTransfers')}
                    </button>
                    <button
                      className="block w-full py-3 text-left text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => handleServiceClick('/wedding-chauffeur')}
                    >
                      {t('weddingChauffeur')}
                    </button>
                    <button
                      className="block w-full py-3 text-left text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => handleServiceClick('/fashion-week')}
                    >
                      {t('fashionWeek')}
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-1 pt-2">
                <Link
                  to="/fleet"
                  className="block w-full px-4 py-3 text-lg font-bold text-gray-800 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('fleet')}
                </Link>
                <Link
                  to="/special-offers"
                  className="block w-full px-4 py-3 text-lg font-bold text-gray-800 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('specialOffers')}
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 text-lg font-bold text-gray-800 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Booking Form Modal */}
      <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
        <BookingForm />
      </Modal>
    </nav>
  );
};

export default Navbar;