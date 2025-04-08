import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      street: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      country: 'USA',
      isDefault: true
    },
    {
      id: 2,
      name: 'Office',
      street: '456 Business Ave',
      city: 'New York',
      postalCode: '10002',
      country: 'USA',
      isDefault: false
    }
  ]);
  const [newAddress, setNewAddress] = useState({
    name: '',
    street: '',
    city: '',
    postalCode: '',
    country: '',
    isDefault: false
  });

  // Mock data for trips and invoices
  const pastTrips = [
    {
      id: 3,
      car: 'Audi A8',
      date: '2024-03-15',
      distance: '250 km',
      price: 450,
    },
    {
      id: 4,
      car: 'Tesla Model S',
      date: '2024-03-10',
      distance: '180 km',
      price: 380,
    },
  ];

  const invoices = [
    {
      id: 1,
      number: 'INV-2024-001',
      date: '2024-03-15',
      amount: 450,
      status: 'paid',
    },
    {
      id: 2,
      number: 'INV-2024-002',
      date: '2024-03-10',
      amount: 380,
      status: 'paid',
    },
  ];

  const bookings = [
    {
      id: 1,
      car: 'Mercedes-Benz S-Class',
      startDate: '2024-04-15',
      endDate: '2024-04-20',
      status: 'confirmed',
      totalPrice: 1200,
    },
    {
      id: 2,
      car: 'BMW 7 Series',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
      status: 'pending',
      totalPrice: 800,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'paid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const addressToAdd = {
      ...newAddress,
      id: Date.now()
    };
    
    if (newAddress.isDefault) {
      setAddresses(prev => prev.map(addr => ({
        ...addr,
        isDefault: false
      })));
    }
    
    setAddresses(prev => [...prev, addressToAdd]);
    setNewAddress({
      name: '',
      street: '',
      city: '',
      postalCode: '',
      country: '',
      isDefault: false
    });
    setShowAddressForm(false);
  };

  const handleAddressChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDeleteAddress = (id) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
  };

  const handleSetDefaultAddress = (id) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!isAuthenticated || !user ? null : (
        <>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('dashboard')}</h1>
            <div className="text-sm text-gray-600">
              {t('welcome')}, {user.name}
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Current Bookings Card */}
            <div 
              onClick={() => setActiveTab('bookings')}
              className={`rounded-lg p-4 cursor-pointer transition-colors duration-150 ${
                activeTab === 'bookings' ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className={`w-5 h-5 ${activeTab === 'bookings' ? 'text-gray-900' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h2 className={`text-sm font-medium ${activeTab === 'bookings' ? 'text-gray-900' : 'text-gray-600'}`}>
                  {t('currentBookings')}
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-2">{bookings.length} {t('activeBookings').toLowerCase()}</p>
            </div>

            {/* Trip History Card */}
            <div 
              onClick={() => setActiveTab('history')}
              className={`rounded-lg p-4 cursor-pointer transition-colors duration-150 ${
                activeTab === 'history' ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className={`w-5 h-5 ${activeTab === 'history' ? 'text-gray-900' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className={`text-sm font-medium ${activeTab === 'history' ? 'text-gray-900' : 'text-gray-600'}`}>
                  {t('tripHistory')}
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-2">{pastTrips.length} {t('completedTrips').toLowerCase()}</p>
            </div>

            {/* Invoices Card */}
            <div 
              onClick={() => setActiveTab('invoices')}
              className={`rounded-lg p-4 cursor-pointer transition-colors duration-150 ${
                activeTab === 'invoices' ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className={`w-5 h-5 ${activeTab === 'invoices' ? 'text-gray-900' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className={`text-sm font-medium ${activeTab === 'invoices' ? 'text-gray-900' : 'text-gray-600'}`}>
                  {t('invoices')}
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-2">{invoices.length} {t('totalInvoices').toLowerCase()}</p>
            </div>

            {/* Addresses Card */}
            <div 
              onClick={() => setActiveTab('addresses')}
              className={`rounded-lg p-4 cursor-pointer transition-colors duration-150 ${
                activeTab === 'addresses' ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className={`w-5 h-5 ${activeTab === 'addresses' ? 'text-gray-900' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className={`text-sm font-medium ${activeTab === 'addresses' ? 'text-gray-900' : 'text-gray-600'}`}>
                  {t('myAddresses')}
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-2">{addresses.length} {t('savedAddresses').toLowerCase()}</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Address Form */}
            {showAddressForm && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">{t('addNewAddress')}</h2>
                <form onSubmit={handleAddressSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t('addressName')}</label>
                    <input
                      type="text"
                      name="name"
                      value={newAddress.name}
                      onChange={handleAddressChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t('street')}</label>
                    <input
                      type="text"
                      name="street"
                      value={newAddress.street}
                      onChange={handleAddressChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">{t('city')}</label>
                      <input
                        type="text"
                        name="city"
                        value={newAddress.city}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">{t('postalCode')}</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={newAddress.postalCode}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t('country')}</label>
                    <input
                      type="text"
                      name="country"
                      value={newAddress.country}
                      onChange={handleAddressChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isDefault"
                      checked={newAddress.isDefault}
                      onChange={handleAddressChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">{t('setAsDefault')}</label>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowAddressForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {t('cancel')}
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {t('save')}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Addresses List */}
            {activeTab === 'addresses' && !showAddressForm && (
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">{t('myAddresses')}</h2>
                    <button
                      onClick={() => setShowAddressForm(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {t('addNewAddress')}
                    </button>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {addresses.map((address) => (
                    <div key={address.id} className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {address.name}
                            {address.isDefault && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {t('defaultAddress')}
                              </span>
                            )}
                          </h3>
                          <div className="mt-1 text-sm text-gray-500">
                            <p>{address.street}</p>
                            <p>{address.city}, {address.postalCode}</p>
                            <p>{address.country}</p>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          {!address.isDefault && (
                            <button
                              onClick={() => handleSetDefaultAddress(address.id)}
                              className="text-sm text-blue-600 hover:text-blue-800"
                            >
                              {t('setAsDefault')}
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteAddress(address.id)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            {t('deleteAddress')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Current Bookings */}
            {activeTab === 'bookings' && (
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {booking.car}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(booking.startDate).toLocaleDateString()} -{' '}
                          {new Date(booking.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {t(booking.status)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-gray-900">
                        ${booking.totalPrice}
                      </p>
                      {booking.status === 'confirmed' && (
                        <button className="text-sm text-red-600 hover:text-red-800">
                          {t('cancel')}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Trip History */}
            {activeTab === 'history' && (
              <div className="space-y-6">
                {pastTrips.map((trip) => (
                  <div key={trip.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {trip.car}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(trip.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">{trip.distance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-gray-900">
                        ${trip.price}
                      </p>
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        {t('viewDetails')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Invoices */}
            {activeTab === 'invoices' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('invoiceNumber')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('date')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('amount')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('status')}
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {invoice.number}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(invoice.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${invoice.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              invoice.status
                            )}`}
                          >
                            {t(invoice.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-blue-600 hover:text-blue-800">
                            {t('download')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
} 