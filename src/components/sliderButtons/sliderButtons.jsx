import React from 'react';
import sliderCl from './sliderButton.module.scss';


const SliderButtons = (props) => {
  
  return(
    <div className={sliderCl.sliderButtons}>
      <span className={sliderCl.button1} ></span>
      <span className={sliderCl.button2} ></span>
      <span className={sliderCl.button3} ></span>
      <span className={sliderCl.button4} ></span>
    </div>
  );
}

export default SliderButtons;