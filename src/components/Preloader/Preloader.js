import './Preloader.css';
import React from 'react';

function Preloader(props) {
  return (
    <div className="preloader">
      <div className={`preloader__container${
          props.preloaderVisible ? ' preloader__container_visible' : ''
        }`}
      >
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
