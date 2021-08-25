import React from 'react';
import priceCl from './price.module.scss';

const Price = (props) => {
  return(
    <div className={priceCl.priceWrapper}>
      <div className={priceCl.currentPrice}>{props.price}</div>
      <span className={priceCl.roublSymbol}></span>
    </div>
  );
}

export default Price;