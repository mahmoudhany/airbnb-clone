import React, { useCallback, useEffect } from 'react';
import BtnTab from './BtnTab'
import Destination from '../Destination'
import { statesAndCities } from '../../utilities'
const Getaways = () => {
  const btnContent = [
    'Destinations for arts & culture',
    'Destinations for outdoor adventure',
    'Mountain cabins',
    'Beach destinations',
    'Popular destinations'
  ]
  const selectedBtn = (e, id) => {
    let i;
    const btns = document.getElementsByClassName("destination-type");
    const tabcontent = document.getElementsByClassName("destination-states-content")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }

    for (i = 0; i < btns.length; i++) {
      btns[i].className = btns[i].className.replace(" active", "");
    }
    document.getElementById(`${id}`).style.display = "grid"
    e.currentTarget.className += " active";
  }

  return (
    <section className="getaways app-container">
      <h3>Inspiration for future getaways</h3>
      <div className="getaways__wrapper">
        <div className="destination-types">
          {
            btnContent.map((content, i) => (
              <BtnTab
                key={i}
                content={content}
                selectedBtn={(e) => { selectedBtn(e, i) }}
                className={`destination-type custom-btn ${i === 0 ? ' active' : ''}`}
              />
            ))
          }
        </div>

        <div className="destination-states">
          {
            btnContent.map((content, i) => (
              <div
                className="destination-states-content"
                id={`${i}`}
                style={{
                  display: i === 0 ? 'grid' : 'none',
                  transition: 'all 1s ease-in-out'
                }}
              >
                {
                  statesAndCities.map(({ state, city }, i) => {
                    return <Destination
                      key={i}
                      city={city}
                      state={state}
                    />
                  })
                }
              </div>
            ))
          }
          {/* <div className="destination-states-content" style={{ background: "red" }} id="1">
            {
              statesAndCities.map(({ state, city }, i) => {
                return <Destination
                  key={i}
                  city={city}
                  state={state}
                />
              })
            }
          </div> */}
          {/* <div className="destination-states-content" id="2">
            {
              statesAndCities.map(({ state, city }, i) => {
                return <Destination
                  key={i}
                  city={city}
                  state={state}
                />
              })
            }
          </div>
          <div className="destination-states-content" id="3">
            {
              statesAndCities.map(({ state, city }, i) => {
                return <Destination
                  key={i}
                  city={city}
                  state={state}
                />
              })
            }
          </div>
          <div className="destination-states-content" id="4">
            {
              statesAndCities.map(({ state, city }, i) => {
                return <Destination
                  key={i}
                  city={city}
                  state={state}
                />
              })
            }
          </div> */}
        </div>

      </div>
    </section >
  );
};

export default Getaways;
