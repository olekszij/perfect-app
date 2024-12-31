import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

const HeroForm = () => {
  const [orderType, setOrderType] = useState("oneWay");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const handleOrderTypeChange = (type) => {
    setOrderType(type);
  };

  return (
    <div className="bg-white p-6 rounded-lg max-w-lg mx-auto space-y-4">
      {/* Toggle */}
      <div className="flex border-b mb-6">
        <button
          className={`w-1/2 py-2 font-bold ${
            orderType === "oneWay" ? "text-black border-b-4 border-gray-700" : "text-gray-500"
          }`}
          onClick={() => handleOrderTypeChange("oneWay")}
        >
          One way
        </button>
        <button
          className={`w-1/2 py-2 font-bold ${
            orderType === "byHour" ? "text-black border-b-4 border-gray-700" : "text-gray-500"
          }`}
          onClick={() => handleOrderTypeChange("byHour")}
        >
          By the hour
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* From Field */}
        <div className="relative bg-gray-100 p-4 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
          <label htmlFor="from" className="text-gray-700 font-medium absolute top-1 left-4 text-sm">
            From
          </label>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 mr-3 pt-2" />
            <input
              type="text"
              id="from"
              name="from"
              placeholder="Address, airport, hotel, ..."
              className="w-full bg-transparent focus:outline-none leading-relaxed pt-2"
            />
          </div>
        </div>

        {/* To or Duration Field */}
        {orderType === "oneWay" && (
          <div className="relative bg-gray-100 p-4 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
            <label htmlFor="to" className="text-gray-700 font-medium absolute top-1 left-4 text-sm">
              To
            </label>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 mr-3 pt-2" />
              <input
                type="text"
                id="to"
                name="to"
                placeholder="Address, airport, hotel, ..."
                className="w-full bg-transparent focus:outline-none pt-2"
              />
            </div>
          </div>
        )}

        {orderType === "byHour" && (
          <div className="relative bg-gray-100 p-4 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
            <label
              htmlFor="duration"
              className="text-gray-700 font-medium absolute top-1 left-4 text-sm"
            >
              Duration
            </label>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-3 pt-2" />
              <select
                id="duration"
                name="duration"
                className="w-full bg-transparent focus:outline-none pt-2"
              >
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
                <option value="6">6 hours</option>
              </select>
            </div>
          </div>
        )}

        {/* Date Field */}
        <div className="relative bg-gray-100 p-4 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
          <label htmlFor="date" className="text-gray-700 font-medium absolute top-1 left-4 text-sm">
            Date
          </label>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendar} className="text-gray-400 mr-3 pt-2" />
            <input
              type="date"
              id="date"
              name="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-transparent focus:outline-none pt-2"
            />
          </div>
        </div>

        {/* Time Field */}
        <div className="relative bg-gray-100 p-4 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
          <label htmlFor="time" className="text-gray-700 font-medium absolute top-1 left-4 text-sm">
            Time
          </label>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-3 pt-2" />
            <input
              type="time"
              id="time"
              name="time"
              className="w-full bg-transparent focus:outline-none pt-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900"
        >
          Search
        </button>
        <p className="text-center mt-4 text-gray-600"></p>
      </form>
    </div>
  );
};

export default HeroForm;
