import React from 'react';
import Header from '../Header'

const Banner = () => {
  return (
    <section className="banner">
      <Header />
      <div className="cover-wrapper"
        style={{
          backgroundImage: `url("/images/cover.webp")`,
        }}
      >
        <div className="app-container">
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div>
                <h1 className="display-4 col-md-3">Go Near</h1>
              </div>
              <div>
                <a href="#" className="custom-btn">Explore nearby stays</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Banner;
