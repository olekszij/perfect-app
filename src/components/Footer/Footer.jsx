import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">Perfect Cab</h2>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="/privacy-policy"
            className="hover:text-white text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:text-white text-sm"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="hover:text-white text-sm"
          >
            Contact Us
          </a>
        </div>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Perfect Cab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
