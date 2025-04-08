"use client";

import { useLocation } from "react-router-dom";
import { MapPin, CalendarDays, Clock } from "lucide-react";

const TripSummary = () => {
  const location = useLocation();
  const {
    from = "Starting location",
    to = "",
    orderType = "oneWay",
    date = "Date",
    time = "Time",
    distance = "0 km",
    duration = "Unknown",
  } = location.state || {};

  // Тарифы для почасовой аренды (по данным с изображения)
  const hourlyRates = {
    business: { vito: 50, eClass: 60 },
    vip: { vClass: 70, sClass: 80 },
  };

  const hourlyOptions = [
    { hours: 1, label: "1 час" },
    { hours: 4, label: "4 часа" },
    { hours: 8, label: "8 часов" },
    { hours: 10, label: "10 часов" },
  ];

  // Функция расчёта цены на основе расстояния
  const calculateDistancePrice = () => {
    let price;
    const distanceInKm = parseFloat(distance.replace(/[^\d.]/g, "")) || 0;

    if (distanceInKm <= 10) price = 80;
    else if (distanceInKm > 10 && distanceInKm <= 20) price = 110;
    else if (distanceInKm > 20 && distanceInKm <= 30) price = 130;
    else if (distanceInKm > 30 && distanceInKm <= 40) price = 140;
    else if (distanceInKm > 40 && distanceInKm <= 50) price = 150;
    else if (distanceInKm > 50 && distanceInKm <= 60) price = 160;
    else if (distanceInKm > 60 && distanceInKm <= 80) price = 200;
    else if (distanceInKm > 80 && distanceInKm <= 90) price = 220;
    else price = 220 + (distanceInKm - 90) * 2;

    return price;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Информация о поездке */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        {/* Дата и время */}
        <div className="flex items-center space-x-3 mb-4">
          <CalendarDays size={24} className="text-gray-700" />
          <div>
            <p className="text-lg font-bold">{date} at {time}</p>
            {orderType === "oneWay" && <p className="text-gray-600">Estimated arrival in {duration}</p>}
          </div>
        </div>

        {/* Маршрут */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin size={24} className="text-gray-700" />
            <p className="text-gray-600 font-medium">{from}</p>
          </div>
          {orderType === "oneWay" && (
            <div className="flex items-center space-x-3">
              <MapPin size={24} className="text-red-500" />
              <p className="text-gray-600 font-medium">{to}</p>
            </div>
          )}
        </div>

        {/* Расстояние (только для "One Way") */}
        {orderType === "oneWay" && (
          <div className="flex items-center space-x-3 mt-4">
            <Clock size={24} className="text-gray-600" />
            <p className="text-gray-600">{distance}</p>
          </div>
        )}
      </div>

      {/* Блок цен */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Pricing</h2>
        {orderType === "oneWay" ? (
          // Расчет цены по расстоянию
          <p className="text-lg font-bold text-gray-800">
            Estimated price: <span className="text-black">€{calculateDistancePrice()}</span>
          </p>
        ) : (
          // Таблица тарифов для почасовой аренды
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Business Class</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-3 border">Duration</th>
                    <th className="p-3 border">Mercedes Vito</th>
                    <th className="p-3 border">Mercedes E-Class</th>
                  </tr>
                </thead>
                <tbody>
                  {hourlyOptions.map(({ hours, label }) => (
                    <tr key={hours} className="border">
                      <td className="p-3 border">{label}</td>
                      <td className="p-3 border">€{hourlyRates.business.vito * hours}</td>
                      <td className="p-3 border">€{hourlyRates.business.eClass * hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold mt-6">VIP Class</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-3 border">Duration</th>
                    <th className="p-3 border">Mercedes V-Class</th>
                    <th className="p-3 border">Mercedes S-Class</th>
                  </tr>
                </thead>
                <tbody>
                  {hourlyOptions.map(({ hours, label }) => (
                    <tr key={hours} className="border">
                      <td className="p-3 border">{label}</td>
                      <td className="p-3 border">€{hourlyRates.vip.vClass * hours}</td>
                      <td className="p-3 border">€{hourlyRates.vip.sClass * hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Кнопка подтверждения */}
      <div className="mt-6">
        <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900">
          Continue
        </button>
      </div>
    </div>
  );
};

export default TripSummary;
