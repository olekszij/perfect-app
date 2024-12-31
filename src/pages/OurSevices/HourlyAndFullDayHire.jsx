import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGlassCheers,
  faTrophy,
  faSpa,
  faSuitcaseRolling,
  faArrowsAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const HourlyAndFullDayHire = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Заголовок и описание */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Hourly and Full Day Hire
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Discover flexible hourly and full-day chauffeur services designed for
          your comfort and convenience. Enjoy the freedom to plan your day your
          way, with seamless transportation between meetings, events, or
          relaxing getaways.
        </p>
        <img
          src="/images/hourly-hire.jpg"
          alt="Hourly hire chauffeur service"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Преимущества для разных случаев */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Feature
          icon={faBriefcase}
          title="Client meetings"
          description="Impress your business partners with a professional chauffeur service offering multiple stops and flexible transportation."
        />
        <Feature
          icon={faGlassCheers}
          title="Events and parties"
          description="Start and end your evening in style with a private chauffeur service for major social gatherings."
        />
        <Feature
          icon={faTrophy}
          title="Sporting or cultural events"
          description="Arrive at flagship events, premieres, or galas in comfort and elegance."
        />
        <Feature
          icon={faSpa}
          title="Spa and resort visits"
          description="Relax completely while your chauffeur handles the journey, ensuring you arrive calm and ready."
        />
        <Feature
          icon={faClock}
          title="Always on call"
          description="Your chauffeur is ready to drive you throughout your booked day without waiting or rebooking hassle."
        />
        <Feature
          icon={faSuitcaseRolling}
          title="Luggage handling"
          description="Whether you're traveling with luggage or shopping, leave your belongings with your trusted chauffeur."
        />
        <Feature
          icon={faArrowsAlt}
          title="Total flexibility"
          description="Plan your day with multiple stops and pickups. You decide the destinations, and we’ll get you there in style."
        />
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="flex items-start space-x-6 mb-12">
    <FontAwesomeIcon icon={icon} className="text-black/70 text-4xl" />
    <div>
      <p className="text-lg font-bold text-gray-900">{title}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default HourlyAndFullDayHire;
