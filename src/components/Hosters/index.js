import React from 'react';
import Hoster from '../Hoster/'
const Hosters = () => {
  return (
    <section className="hosters app-container">
      <h3>Join millions of hosts on Airbnb</h3>
      <div className="hosters__wrapper">
        <Hoster />
        <Hoster />
        <Hoster />
      </div>
    </section>
  );
};

export default Hosters;
