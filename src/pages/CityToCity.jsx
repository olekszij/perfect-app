import { useLanguage } from '../contexts/LanguageContext';

const CityToCity = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('cityToCity')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Popular Routes
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Paris - London
                </h3>
                <p className="text-gray-600 mb-4">
                  Luxury travel between two iconic European capitals
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                  {t('bookRide')}
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Paris - Brussels
                </h3>
                <p className="text-gray-600 mb-4">
                  Comfortable journey to the heart of Europe
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                  {t('bookRide')}
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Service Features
            </h2>
            <div className="bg-white rounded-lg shadow p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional chauffeurs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Luxury vehicles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Door-to-door service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityToCity; 