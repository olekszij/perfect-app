import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорт React Router
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import CityToCityRoutes from './components/CityToCityRoutes/CityToCityRoutes';
import Activities from './components/Activities/Activities';
import ServiceClasses from './components/ServiceClasses/ServiceClasses';
import AirportTransfers from './pages/AirportTransfers';
import Footer from './components/Footer/Footer';

// Импортируем новые страницы
import Fleet from './pages/Fleet';
import SpecialOffers from './pages/SpecialOffers';

// import FAQ from './pages/FAQ';



import Contact from './pages/Contact';

// Импортируем страницы услуг
import HourlyAndFullDayHire from './pages/OurSevices/HourlyAndFullDayHire';
import CityToCityRides from './pages/OurSevices/CityToCityRides';
import WeddingChauffeur from './pages/OurSevices/WeddingChauffeur';
import FashionWeekChauffeur from './pages/OurSevices/FashionWeekChauffeur';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Flex-контейнер */}
        <Menu /> {/* Меню отображается на всех страницах */}
        <div className="flex-grow"> {/* Этот блок растягивается */}
          <Routes>
            {/* Главная страница */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <ServiceClasses />
                  <CityToCityRoutes />
                  <Activities />
                </>
              }
            />

            {/* Страницы услуг */}
            <Route path="/hourly-and-full-day-hire" element={<HourlyAndFullDayHire />} />
            <Route path="/city-to-city-rides" element={<CityToCityRides />} />
            <Route path="/airport-transfers" element={<AirportTransfers />} />
            <Route path="/wedding-chauffeur" element={<WeddingChauffeur />} />
            <Route path="/fashion-week-chauffeur" element={<FashionWeekChauffeur />} />

            {/* Другие страницы */}
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
            {/* <Route path="/faq" element={<FAQ />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Футер всегда прикреплен к низу */}
      </div>
    </Router>
  );
}

export default App;
