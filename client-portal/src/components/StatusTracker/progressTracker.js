import React, { Component , useState} from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

function ProgressTracker ({ done }) {
    const [style, setStyle] = useState('');

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${ done }%`
        }
        setStyle(newStyle);
    }, 1000);
      return (
        <div className="progress-tracker">
        <label className="progress-tracker__label">Progress Tracker</label>
        <div className="progress-tracker__percentage">
          { done }%
        </div>
        </div>
      )
  }
  
  export default ProgressTracker;