import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUserCircle, faBars, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  return (
    <header className='sticky-top'>
      <div className="header app-container">
        <div className="logo" >
          <a href="/">
            <img src="images/Logo.svg" alt="logo" />
          </a>
        </div >
        <div className="search">
          <button>
            <div className="search-input">
              Start your search
          </div>
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </button>
        </div>
        <div className="right">
          <nav>
            <div>
              <a className='nav__btn nav__btn--host' href="#" >Become a host</a>
            </div>
            <div>
              <button className='nav__btn nav__btn--language'>
                <div>
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </button>
            </div>
            <div className="dropdown">
              <button className="custom-btn nav__btn nav__btn--profile" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                <div>
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faUserCircle} size={'2x'} style={{ color: '#717171' }} />
                </div>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Sign up</a>
                <a className="dropdown-item" href="#">Log in</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Host your home</a>
                <a className="dropdown-item" href="#">Host an experience</a>
                <a className="dropdown-item" href="#">Help</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header >
  );
};

export default Header;
