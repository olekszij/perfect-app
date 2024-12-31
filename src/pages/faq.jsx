import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How can I book a car with a driver?",
      answer:
        "You can book a car with a driver through our website by filling out the booking form or by calling our contact number. You can also use our app to select the pickup location, date, time, and duration.",
    },
    {
      question: "What types of cars are available for hire?",
      answer:
        "We offer a wide range of cars, from standard sedans to luxury vehicles and minivans for groups. Simply choose the vehicle class that suits your needs.",
    },
    {
      question: "How do I book a chauffeur by the hour?",
      answer: (
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Select the pickup location.</li>
          <li>Choose the day, start time, and duration.</li>
          <li>Pick a vehicle class that suits your needs.</li>
          <li>
            Provide additional information such as your itinerary in the “Notes
            for the chauffeur” field.
          </li>
          <li>Complete your booking, and enjoy your private chauffeur!</li>
        </ul>
      ),
    },
    {
      question: "Can my chauffeur take me anywhere I want?",
      answer:
        "Yes, they can. You have total flexibility with your destination and can change your mind before or during your travel. The only condition is that your chauffeur must have enough time to return to their starting city by the end of your booking. For intercity travel, we recommend booking City-to-City rides.",
    },
    {
      question: "How many hours can I book an hourly chauffeur for?",
      answer:
        "You can book this service for anywhere between 2 to 24 hours. For multi-day bookings, please contact our Customer Care team.",
    },
    {
      question: "Can I extend the number of hours I’ve booked?",
      answer:
        "Yes, you can extend your booking before it starts via our app or website. If your booking has already started, inform your chauffeur, and they will confirm availability. Additional charges will apply for extra time.",
    },
    {
      question: "Is fuel included in the rental price?",
      answer:
        "Yes, fuel costs are included in the rental price. You only pay the specified amount without any hidden charges.",
    },
    {
      question: "Can I change my plans when I’ve hired a chauffeur for a day?",
      answer:
        "Yes, you can. Your chauffeur is on stand-by to accommodate your requests within the allotted time. The only condition is that they must have enough time left to return to their starting city by the end of the booking. For intercity travel, consider booking City-to-City rides.",
    },
    {
      question: "How far can an hourly chauffeur take me?",
      answer:
        "The by-the-hour chauffeur service includes 20 kilometers per hour. Any additional distance will incur extra charges.",
    },
    {
      question: "How long does a day booking last?",
      answer:
        "You can choose your pickup time and how many hours you want your reservation to last, anywhere between 2 and 24 hours per booking.",
    },
    {
      question: "Can I hire a car with a driver for multiple days?",
      answer:
        "Yes, you can hire a car with a driver for multiple days. Please contact us to arrange the details and customize your booking.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "Our services are available 24/7. You can book a car at any time convenient for you.",
    },
    {
      question: "How do I pay for the service?",
      answer:
        "You can pay online, via credit card, or in cash directly to the driver after the trip.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2
              onClick={() => toggleAnswer(index)}
              className="text-lg font-semibold cursor-pointer flex justify-between items-center"
            >
              {faq.question}
              <span className="text-gray-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </h2>
            {openIndex === index && (
              <div className="text-gray-700 mt-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
