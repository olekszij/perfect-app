import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLocationDot, 
  faClock, 
  faUsers, 
  faSuitcase, 
  faChevronLeft,
  faChevronRight,
  faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import { useLanguage } from '../../contexts/LanguageContext';

const Calendar = ({ selectedDate, onChange }) => {
  const [displayedMonth, setDisplayedMonth] = useState(selectedDate || new Date());
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef(null);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    // Добавляем дни предыдущего месяца
    const prevMonth = new Date(year, month, 0);
    const daysInPrevMonth = prevMonth.getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, daysInPrevMonth - i),
        isCurrentMonth: false
      });
    }

    // Добавляем дни текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }

    // Добавляем дни следующего месяца
    const remainingDays = 42 - days.length; // 6 недель по 7 дней
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }

    return days;
  };

  const isSelected = (date) => {
    return selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const handlePrevMonth = () => {
    setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1));
  };

  const handleDateClick = (date) => {
    onChange(date);
  };

  const days = getDaysInMonth(displayedMonth);
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', { 
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="relative" ref={calendarRef}>
      <div 
        className="flex items-center w-full cursor-pointer bg-gray-100 p-4 rounded-lg group focus-within:ring-2 focus-within:ring-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400 mr-3 group-hover:text-gray-600 transition-colors" />
        <span className="text-gray-900">{formatDate(selectedDate || new Date())}</span>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 p-6">
          <div className="flex items-center justify-between mb-8">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h2 className="text-2xl">
              {displayedMonth.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
            </h2>
            <button
              type="button"
              onClick={handleNextMonth}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-0">
            {weekDays.map(day => (
              <div key={day} className="h-14 flex items-center justify-center text-sm text-gray-400">
                {day}
              </div>
            ))}
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  handleDateClick(day.date);
                  setIsOpen(false);
                }}
                disabled={day.date < new Date()}
                className={`h-14 flex items-center justify-center relative text-base
                  ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                  ${day.date < new Date() ? 'cursor-not-allowed opacity-50' : 'hover:text-[#2A52BE]'}
                  ${isSelected(day.date) ? 'text-[#2A52BE]' : ''}
                `}
              >
                <span className={`w-10 h-10 flex items-center justify-center
                  ${isSelected(day.date) ? 'border-2 border-[#2A52BE] rounded-full' : ''}
                `}>
                  {day.date.getDate()}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Calendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired
};

const TimeWheel = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  const [selectedTime, setSelectedTime] = useState(value || '00:00');
  const [currentHour, currentMinute] = selectedTime.split(':');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTimeChange = (hour, minute) => {
    const newTime = `${hour}:${minute}`;
    setSelectedTime(newTime);
    onChange({ target: { name: 'time', value: newTime } });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={pickerRef}>
      <div 
        className="flex items-center w-full cursor-pointer bg-gray-100 p-4 rounded-lg group focus-within:ring-2 focus-within:ring-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-3 group-hover:text-gray-600 transition-colors" />
        <span className="text-gray-900">{selectedTime}</span>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 p-6">
          <div className="flex gap-4">
            {/* Hours */}
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-2">Hours</div>
              <div className="h-[200px] overflow-y-auto scrollbar-hide">
                <div className="space-y-2">
                  {hours.map(hour => (
                    <button
                      key={hour}
                      className={`w-full py-2 px-4 text-center transition-all relative ${
                        hour === currentHour
                          ? 'text-[#2563eb] font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => handleTimeChange(hour, currentMinute)}
                    >
                      {hour === currentHour ? (
                        <span className="w-10 h-10 rounded-full border-2 border-[#2563eb] inline-flex items-center justify-center">
                          {hour}
                        </span>
                      ) : hour}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Minutes */}
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-2">Minutes</div>
              <div className="h-[200px] overflow-y-auto scrollbar-hide">
                <div className="space-y-2">
                  {minutes.map(minute => (
                    <button
                      key={minute}
                      className={`w-full py-2 px-4 text-center transition-all relative ${
                        minute === currentMinute
                          ? 'text-[#2563eb] font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => handleTimeChange(currentHour, minute)}
                    >
                      {minute === currentMinute ? (
                        <span className="w-10 h-10 rounded-full border-2 border-[#2563eb] inline-flex items-center justify-center">
                          {minute}
                        </span>
                      ) : minute}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

TimeWheel.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const SelectPassengers = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const { t } = useLanguage();

  const passengerOptions = Array.from({ length: 8 }, (_, i) => i + 1);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <div 
        className="flex items-center w-full cursor-pointer bg-gray-100 p-4 rounded-lg group focus-within:ring-2 focus-within:ring-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-3 group-hover:text-gray-600 transition-colors" />
        <span className="text-gray-900">
          {value} {value === 1 ? t('passenger') : t('passengers')}
        </span>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 p-6">
          <div className="text-sm text-gray-500 mb-2">{t('passengers')}</div>
          <div className="h-[200px] overflow-y-auto scrollbar-hide">
            <div className="space-y-2">
              {passengerOptions.map(num => (
                <button
                  key={num}
                  type="button"
                  className={`w-full py-2 px-4 text-center transition-all relative ${
                    num === value
                      ? 'text-[#2563eb] font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    onChange({ target: { name: 'passengers', value: num } });
                    setIsOpen(false);
                  }}
                >
                  {num === value ? (
                    <span className="w-10 h-10 rounded-full border-2 border-[#2563eb] inline-flex items-center justify-center">
                      {num}
                    </span>
                  ) : num}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SelectLuggage = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const { t } = useLanguage();

  const luggageOptions = Array.from({ length: 5 }, (_, i) => i);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <div 
        className="flex items-center w-full cursor-pointer bg-gray-100 p-4 rounded-lg group focus-within:ring-2 focus-within:ring-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faSuitcase} className="text-gray-400 mr-3 group-hover:text-gray-600 transition-colors" />
        <span className="text-gray-900">
          {value} {value === 1 ? t('piece') : t('pieces')}
        </span>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 p-6">
          <div className="text-sm text-gray-500 mb-2">{t('luggage')}</div>
          <div className="h-[200px] overflow-y-auto scrollbar-hide">
            <div className="space-y-2">
              {luggageOptions.map(num => (
                <button
                  key={num}
                  type="button"
                  className={`w-full py-2 px-4 text-center transition-all relative ${
                    num === value
                      ? 'text-[#2563eb] font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    onChange({ target: { name: 'luggage', value: num } });
                    setIsOpen(false);
                  }}
                >
                  {num === value ? (
                    <span className="w-10 h-10 rounded-full border-2 border-[#2563eb] inline-flex items-center justify-center">
                      {num}
                    </span>
                  ) : num}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SelectDuration = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const { t } = useLanguage();

  const durationOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative bg-gray-100 p-4 rounded-lg group focus-within:ring-2 focus-within:ring-black" ref={selectRef}>
      <label className="text-gray-700 font-medium absolute top-1 left-4 text-sm">
        {t('duration')}
      </label>
      <div 
        className="flex items-center cursor-pointer pt-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-3 group-hover:text-gray-600 transition-colors" />
        <span className="text-gray-900">
          {value} {value === 1 ? t('hour') : t('hours_plural')}
        </span>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 p-6">
          <div className="text-sm text-gray-500 mb-2">{t('duration')}</div>
          <div className="h-[200px] overflow-y-auto scrollbar-hide">
            <div className="space-y-2">
              {durationOptions.map(num => (
                <button
                  key={num}
                  type="button"
                  className={`w-full py-2 px-4 text-center transition-all relative ${
                    num === value
                      ? 'text-[#2563eb] font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    onChange({ target: { name: 'hours', value: num } });
                    setIsOpen(false);
                  }}
                >
                  {num === value ? (
                    <span className="w-10 h-10 rounded-full border-2 border-[#2563eb] inline-flex items-center justify-center">
                      {num}
                    </span>
                  ) : num}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

SelectPassengers.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

SelectLuggage.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

SelectDuration.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default function BookingForm() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Load initial form data from localStorage or use defaults
  const getInitialFormData = () => {
    const savedData = localStorage.getItem('bookingFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Convert saved date string back to Date object
      return {
        ...parsedData,
        date: new Date(parsedData.date)
      };
    }
    return {
      serviceType: 'oneWay',
      from: '',
      to: '',
      date: new Date(),
      time: '12:00',
      passengers: 1,
      luggage: 0,
      hours: 1
    };
  };

  const [formData, setFormData] = useState(getInitialFormData());

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookingFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to order page with form data
    navigate('/order', { state: { formData } });
    // Clear saved form data from localStorage after successful booking
    localStorage.removeItem('bookingFormData');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Type Toggle */}
        <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-1 shadow-inner">
          <div className="flex relative z-0">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, serviceType: 'oneWay' }))}
              className={`flex-1 py-3 px-4 text-center relative z-10 transition-all duration-200 rounded-md
                ${formData.serviceType === 'oneWay' 
                  ? 'bg-black text-[#4ade80] font-medium' 
                  : 'text-gray-500 hover:text-gray-700'}`}
            >
              {t('oneWay')}
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, serviceType: 'byHour' }))}
              className={`flex-1 py-3 px-4 text-center relative z-10 transition-all duration-200 rounded-md
                ${formData.serviceType === 'byHour' 
                  ? 'bg-black text-[#4ade80] font-medium' 
                  : 'text-gray-500 hover:text-gray-700'}`}
            >
              {t('byHour')}
            </button>
          </div>
        </div>

        {/* Location Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative bg-gray-100 p-4 rounded-lg group focus-within:ring-2 focus-within:ring-black">
            <label htmlFor="from" className="text-gray-700 font-medium absolute top-1 left-4 text-sm">
              {t('pickupLocation')}
            </label>
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={faLocationDot} 
                className="text-gray-400 mr-3 pt-2 group-hover:text-gray-600 transition-colors" 
              />
              <input
                type="text"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                className="w-full bg-transparent focus:outline-none pt-2 font-medium placeholder-gray-400"
                placeholder={t('enterPickupAddress')}
                required
              />
            </div>
          </div>

          {formData.serviceType === 'oneWay' ? (
            <div className="relative bg-gray-100 p-4 rounded-lg group focus-within:ring-2 focus-within:ring-black">
              <label htmlFor="to" className="text-gray-700 font-medium absolute top-1 left-4 text-sm">
                {t('dropoffLocation')}
              </label>
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faLocationDot} 
                  className="text-gray-400 mr-3 pt-2 group-hover:text-gray-600 transition-colors" 
                />
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  className="w-full bg-transparent focus:outline-none pt-2 font-medium placeholder-gray-400"
                  placeholder={t('enterDropoffAddress')}
                  required
                />
              </div>
            </div>
          ) : (
            <SelectDuration
              value={formData.hours}
              onChange={handleInputChange}
            />
          )}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative bg-white rounded-lg focus-within:ring-2 focus-within:ring-black">
            <Calendar
              selectedDate={formData.date}
              onChange={(newDate) => handleInputChange({ target: { name: 'date', value: newDate } })}
            />
          </div>

          <div className="relative bg-white rounded-lg focus-within:ring-2 focus-within:ring-black">
            <TimeWheel
              value={formData.time}
              onChange={(e) => handleInputChange({ target: { name: 'time', value: e.target.value } })}
            />
          </div>
        </div>

        {/* Passengers and Luggage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectPassengers
            value={formData.passengers}
            onChange={handleInputChange}
          />
          <SelectLuggage
            value={formData.luggage}
            onChange={handleInputChange}
          />
        </div>

        {/* Book a Ride Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 px-8 rounded-xl font-medium hover:bg-gray-900 transition-colors text-lg"
        >
          {t('bookRide')}
        </button>
      </form>
    </div>
  );
} 