import React from 'react';

const Header = ({ title }) => {
  return (
    <div  id="city-to-city" className="text-center mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};

export default Header;
