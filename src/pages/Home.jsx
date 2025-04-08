const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/paris.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          Your Premium Chauffeur Service
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 max-w-3xl">
          Experience luxury transportation with our professional chauffeur service in Paris and beyond
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
          Book Your Ride
        </button>
      </div>
    </div>
  );
};

export default Home; 