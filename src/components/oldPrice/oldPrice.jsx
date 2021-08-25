import React from 'react';
import oldPriceCl from './oldPrice.module.scss';


const OldPrice = (props) => {
  return(
    <div className={oldPriceCl.oldPriceWrapper}>
      <div className={oldPriceCl.oldPrice}>{props.oldprice}</div>
      <span className={oldPriceCl.roublSymbol}></span>
      <div className={oldPriceCl.poloska}></div>
    </div>
  );
}

export default OldPrice;