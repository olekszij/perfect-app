// src/pages/Contact.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faMessage
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const contactInfo = [
    {
      icon: faPhone,
      title: "Phone",
      content: "+33 1 23 45 67 89",
      description: "Available 24/7 for your inquiries",
      bgColor: "bg-sky-50"
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: "info@perfectcab.com",
      description: "We&apos;ll respond within 2 hours",
      bgColor: "bg-yellow-50"
    },
    {
      icon: faLocationDot,
      title: "Office",
      content: "75008 Paris, France",
      description: "Experience luxury in the Champs-Élysées district",
      bgColor: "bg-purple-50"
    },
    {
      icon: faClock,
      title: "Working Hours",
      content: "24/7",
      description: "Always at your service",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-xl text-gray-600">
            Whether you have questions about our services or want to book a ride, we&apos;re here to help
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Contact Form Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-sky-50 p-8 rounded-3xl shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <FontAwesomeIcon icon={faMessage} className="text-2xl text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-colors bg-white/50"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-colors bg-white/50"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-colors bg-white/50"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-colors bg-white/50"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`${info.bgColor} p-6 rounded-3xl transform hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <FontAwesomeIcon icon={info.icon} className="text-2xl text-gray-900" />
                  <div>
                    <h3 className="font-bold text-gray-900">{info.title}</h3>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

