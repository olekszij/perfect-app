import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceType: 'oneWay',
    from: '',
    to: '',
    date: new Date(),
    time: '',
    passengers: 1,
    luggage: 0,
    serviceClass: 'business',
    hours: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order', { state: { formData } });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Type Selection */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className={`py-4 px-6 rounded-xl text-center font-medium transition-colors ${
              formData.serviceType === 'oneWay'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
            onClick={() => handleInputChange({ target: { name: 'serviceType', value: 'oneWay' } })}
          >
            One Way
          </button>
          <button
            type="button"
            className={`py-4 px-6 rounded-xl text-center font-medium transition-colors ${
              formData.serviceType === 'hourly'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
            onClick={() => handleInputChange({ target: { name: 'serviceType', value: 'hourly' } })}
          >
            Hourly Hire
          </button>
        </div>

        {/* Location Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
              Pick-up Location
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter pick-up address"
              required
            />
          </div>
          {formData.serviceType === 'oneWay' && (
            <div>
              <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                Drop-off Location
              </label>
              <input
                type="text"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter drop-off address"
                required
              />
            </div>
          )}
          {formData.serviceType === 'hourly' && (
            <div>
              <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
                Duration (hours)
              </label>
              <select
                id="hours"
                name="hours"
                value={formData.hours}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(hour => (
                  <option key={hour} value={hour}>{hour} hour{hour > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <DatePicker
              selected={formData.date}
              onChange={date => handleInputChange({ target: { name: 'date', value: date } })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              minDate={new Date()}
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Passengers and Luggage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
              Passengers
            </label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="luggage" className="block text-sm font-medium text-gray-700 mb-1">
              Luggage
            </label>
            <select
              id="luggage"
              name="luggage"
              value={formData.luggage}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              required
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num} piece{num !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Service Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Service Class
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              className={`py-4 px-6 rounded-xl text-center font-medium transition-colors ${
                formData.serviceClass === 'business'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              onClick={() => handleInputChange({ target: { name: 'serviceClass', value: 'business' } })}
            >
              Business
            </button>
            <button
              type="button"
              className={`py-4 px-6 rounded-xl text-center font-medium transition-colors ${
                formData.serviceClass === 'firstClass'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              onClick={() => handleInputChange({ target: { name: 'serviceClass', value: 'firstClass' } })}
            >
              First Class
            </button>
            <button
              type="button"
              className={`py-4 px-6 rounded-xl text-center font-medium transition-colors ${
                formData.serviceClass === 'luxury'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              onClick={() => handleInputChange({ target: { name: 'serviceClass', value: 'luxury' } })}
            >
              Luxury
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 px-8 rounded-xl font-medium hover:bg-gray-900 transition-colors"
        >
          Continue Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm; 