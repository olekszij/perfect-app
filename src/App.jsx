import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components for handling routing
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import SpecialOffers from './pages/SpecialOffers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CityToCity from './pages/CityToCity';
import HourlyHire from './pages/OurSevices/HourlyAndFullDayHire';
import AirportTransfers from './pages/AirportTransfers';
import WeddingChauffeur from './pages/OurSevices/WeddingChauffeur';
import FashionWeek from './pages/OurSevices/FashionWeekChauffeur';

const App = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/special-offers" element={<SpecialOffers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Service Routes */}
                <Route path="/hourly-hire" element={<HourlyHire />} />
                <Route path="/city-to-city" element={<CityToCity />} />
                <Route path="/airport-transfers" element={<AirportTransfers />} />
                <Route path="/wedding-chauffeur" element={<WeddingChauffeur />} />
                <Route path="/fashion-week" element={<FashionWeek />} />
              </Routes>
            </main>
            <Footer /> {/* Display the Footer component on all pages */}
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App; // Export the App component as the default export

