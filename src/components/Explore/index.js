import React from 'react';
import City from '../City/'
import Home from '../Home/'

const Explore = () => {

  return (
    <section className="explore app-container">
      <div className="cities">
        {
          [...Array(8)].map((_, i) => {
            return <City key={i} />
          })
        }
      </div>
      <div className="homes">
        <h3>Live anywhere</h3>
        <div className='homes-wrapper'>
          <Home />
          <Home />
          <Home />
          <Home />
        </div>
      </div>
    </section>
  );
};

export default Explore;
