import React from 'react';
import compareCl from './compare.module.scss';

const Compare = (props) => {
  return(
    <div className={compareCl.compare}>
      <label>
        <input className={compareCl.compareCheckbox} type="checkbox"/>
        <span className={props.data===false? compareCl.compareIcon : compareCl.compareIconChecked}></span>
      </label>
    </div>
  );
}

export default Compare;