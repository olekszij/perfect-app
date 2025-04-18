import { useState } from 'react';
import Modal from '../Modal/Modal';
import BookingForm from '../BookingForm/BookingForm';

const HeroContent = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Left side - Text content */}
        <div className="relative flex flex-col justify-center px-4 md:px-16 lg:px-24 py-8 md:py-16">
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                <p className="text-white text-sm md:text-base">Elevate Your Journey</p>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Parisian Elegance, <br />
              Global Excellence
            </h1>

            <p className="text-lg md:text-2xl text-white font-light mb-6 md:mb-10 max-w-lg">
              Experience the pinnacle of luxury transportation with our fleet of premium vehicles and professional chauffeurs. Your comfort and style are our priority.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-16">
              <button onClick={openBookingModal} className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                <span>Book a Ride</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <a href="/fleet" className="border border-white text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all">
                <span>View Fleet</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Paris & European Destinations</span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Premium Chauffeur Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image/Video */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          {/* Video with image fallback */}
          <div className="w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center"
              poster="/images/first-class.jpg"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <img
                src="/images/first-class.jpg"
                alt="Luxury First Class Service"
                className="w-full h-full object-cover object-center"
              />
            </video>
          </div>
          <div className="absolute left-0 bottom-0 w-full p-4 md:p-8 bg-gradient-to-t from-black/70 to-transparent z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Discover our service</p>
                <p className="text-white/70 text-xs">Watch the video</p>
              </div>
            </div>
          </div>
          <div className="absolute top-8 left-8 z-20">
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Available Now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-12 z-10 flex flex-col items-center">
        <span className="text-white rotate-90 transform origin-bottom-left mb-8 text-sm tracking-widest">SCROLL</span>
        <div className="h-24 w-px bg-white"></div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isBookingModalOpen} onClose={closeBookingModal}>
        <BookingForm />
      </Modal>
    </div>
  );
};

export default HeroContent;

