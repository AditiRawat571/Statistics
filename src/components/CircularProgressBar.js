import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '90px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0, // Default value for clockwise direction from the top
          strokeLinecap: 'butt',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: `#00A572`,
          textColor: 'black',
          fontWeight:'900',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
