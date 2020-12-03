import React from 'react';

const GiftCard = () => {
  return (
    <section className="app-container">
      <div className="gift-card" href="#" >
        <div className="gift-card__image">
          <img src="images/gift.webp" alt="Gift" />
        </div>
        <div className="gift-card__description">
          <h2>Still after that perfect gift?</h2>
          <p>Surprise them with an Airbnb gift card.</p>
          <a href="#" className="custom-btn">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
