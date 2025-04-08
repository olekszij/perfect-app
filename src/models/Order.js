import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderType: {
    type: String,
    enum: ['oneWay', 'byHour'],
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: function() {
      return this.orderType === 'oneWay';
    }
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  durationHours: {
    type: Number,
    required: function() {
      return this.orderType === 'byHour';
    }
  },
  distance: {
    type: String
  },
  duration: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  price: {
    type: Number,
    required: true
  },
  serviceClass: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order; 