import './Preloader.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Preloader() {
  const { pathname } = useLocation();

  return (
    <div
      className={`preloader${
        pathname === '/saved-movies' ? ' preloader_size_min' : ''
      }`}
    >
      <button
        className={`preloader__button${
          pathname === '/saved-movies' ? ' preloader__button_invisible' : ''
        }`}
        type="button"
      >
        Ещё
      </button>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
