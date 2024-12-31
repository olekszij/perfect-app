import Card from "./../components/Card/Card";
import ParisTransfers from './../components/ParisTransfers/ParisTransfers';


const AirportTransfers = () => {
  const features = [
    {
      title: "Timely Pickups",
      description:
        "Enjoy peace of mind knowing that our chauffeurs arrive on time, every time.",
      image: "/images/airport-transfers.jpg",
      link: "#timely-pickups",
    },
    {
      title: "Flight Tracking",
      description:
        "Our advanced systems monitor your flight status to adjust for any delays or early arrivals.",
      image: "/images/beauvais-airport.jpg",
      link: "#flight-tracking",
    },
    {
      title: "Luxury Vehicles",
      description:
        "Travel in style and comfort with our premium fleet of vehicles, suited for all needs.",
      image: "/images/business-class.jpg",
      link: "#luxury-vehicles",
    },
  ];





  return (
    <div className="bg-gray-100 min-h-screen ">
      
      {/* Основной контент */}
      
     
      
      <main className="container mx-auto px-6 py-20">
        
      <ParisTransfers />
   

        

       
      </main>
    </div>
  );
};

export default AirportTransfers;
