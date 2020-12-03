import React from 'react';

const Destination = ({ city, state }) => {
  return (
    <div>
      <a href="#" className="custom-btn destination-state">
        <div className="destination-state--city">{city}</div>
        <div className="destination-state--state">{state}</div>
      </a>
    </div>
  );
};

export default Destination;
