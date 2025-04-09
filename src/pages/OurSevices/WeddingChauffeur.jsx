const WeddingChauffeur = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-[600px] h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/wedding-chauffeur.jpg"
            alt="Luxury wedding car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Wedding Chauffeur Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
            We offer the finest cars with the best chauffeurs for their most special day in life - their wedding day!
          </p>
          <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-all transform hover:scale-105">
            Book Your Wedding Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingChauffeur;
