import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

export const bookingsAPI = {
  getBookings: () => api.get('/bookings'),
  createBooking: (bookingData) => api.post('/bookings', bookingData),
  updateBookingStatus: (id, status) => api.patch(`/bookings/${id}`, { status }),
};

export default api; 