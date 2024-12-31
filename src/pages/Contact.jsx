// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Contact</h1>
      <p className="text-gray-700 mb-4">
        Have questions or need assistance? Get in touch with us using the form below.
      </p>
      
      <form className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
            id="message"
            name="message"
            rows="5"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

