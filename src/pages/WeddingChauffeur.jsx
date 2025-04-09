import { useLanguage } from '../contexts/LanguageContext';

const WeddingChauffeur = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/images/wedding-car.jpg"
            alt="Luxury wedding car"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {t('weddingChauffeurTitle', 'Luxury Wedding Chauffeur Service')}
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium">
              {t('weddingChauffeurSubtitle', 'Make your special day even more memorable with our premium wedding transportation')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('weddingServiceIntro', 'Your Perfect Wedding Transportation')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('weddingServiceDescription', 'We understand that your wedding day is one of the most important days of your life. Our luxury chauffeur service ensures you arrive in style, comfort, and elegance, making your special day even more memorable.')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('luxuryFleet', 'Luxury Fleet')}</h3>
            <p className="text-gray-600">
              {t('luxuryFleetDesc', 'Choose from our collection of premium vehicles, including classic and modern luxury cars, perfectly suited for your wedding day.')}
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('punctuality', 'Perfect Timing')}</h3>
            <p className="text-gray-600">
              {t('punctualityDesc', 'Our experienced chauffeurs ensure timely arrivals and smooth transitions between venues throughout your wedding day.')}
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('professional', 'Professional Service')}</h3>
            <p className="text-gray-600">
              {t('professionalDesc', 'Professionally trained chauffeurs in formal attire, providing exceptional service with attention to every detail.')}
            </p>
          </div>
        </div>

        {/* Package Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t('weddingPackages', 'Wedding Packages')}
          </h2>
          <div className="space-y-6">
            {/* Package 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{t('basicPackage', 'Essential Wedding Package')}</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('basicPackage1', 'Luxury vehicle for bride and groom')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('basicPackage2', '4 hours of service')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('basicPackage3', 'Professional chauffeur in formal attire')}
                </li>
              </ul>
            </div>

            {/* Package 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-black">
              <div className="inline-block px-4 py-1 bg-black text-white text-sm font-bold rounded-full mb-4">
                {t('mostPopular', 'Most Popular')}
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('premiumPackage', 'Premium Wedding Package')}</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('premiumPackage1', 'Two luxury vehicles (one for bride & groom, one for family)')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('premiumPackage2', '8 hours of service')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('premiumPackage3', 'Champagne service')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('premiumPackage4', 'Decorated vehicles')}
                </li>
              </ul>
            </div>

            {/* Package 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{t('luxuryPackage', 'Luxury Wedding Package')}</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('luxuryPackage1', 'Fleet of three luxury vehicles')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('luxuryPackage2', 'Full day service (12 hours)')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('luxuryPackage3', 'Premium decoration package')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('luxuryPackage4', 'Luxury refreshment package')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('luxuryPackage5', 'Professional photography of vehicles')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('readyToBook', 'Ready to Make Your Wedding Day Special?')}
          </h2>
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors"
          >
            {t('contactUs', 'Contact Us for a Quote')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingChauffeur; 