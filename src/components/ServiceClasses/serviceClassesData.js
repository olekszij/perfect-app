const serviceClassesData = [
  {
    title: 'Business Class',
    image: './images/business-class.jpg',
    description: 'Premium comfort for daily business trips',
    features: [
      { icon: 'user', text: '3 passengers' },
      { icon: 'suitcase', text: '2 bags' }
    ],
    price: {
      amount: '70',
      currency: '€',
      prefix: 'from'
    },
    cars: [
      { name: 'Mercedes E-Class', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8' },
      { name: 'BMW 5 Series', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e' },
      { name: 'Audi A6', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6' },
    ],
  },
  {
    title: 'First Class',
    image: './images/first-class.jpg',
    description: 'Ultimate luxury experience',
    features: [
      { icon: 'user', text: '3 passengers' },
      { icon: 'suitcase', text: '2 bags' }
    ],
    price: {
      amount: '80',
      currency: '€',
      prefix: 'from'
    },
    cars: [
      { name: 'Mercedes S-Class', image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f' },
      { name: 'BMW 7 Series', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068' },
      { name: 'Audi A8', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a' },
    ],
  },
  {
    title: 'Business Van',
    image: './images/business-van.jpg',
    description: 'Spacious comfort for groups',
    features: [
      { icon: 'users', text: '5 passengers' },
      { icon: 'suitcase', text: '8 bags' }
    ],
    price: {
      amount: '70',
      currency: '€',
      prefix: 'from'
    },
    cars: [
      { name: 'Mercedes V-Class', image: './images/mercedes-v-class.jpg' },
      { name: 'VW Multivan', image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c' },
    ],
  },
  {
    title: 'Economy',
    image: './images/econom.jpg',
    description: 'Eco-friendly premium rides',
    features: [
      { icon: 'user', text: '3 passengers' },
      { icon: 'suitcase', text: '1 bag' }
    ],
    price: {
      amount: '60',
      currency: '€',
      prefix: 'from'
    },
    cars: [
      { name: 'Tesla Model S', image: './images/tesla.jpg' },
      { name: 'Audi e-tron', image: './images/audi-a6.jpg' },
    ],
  },
];

export default serviceClassesData;
