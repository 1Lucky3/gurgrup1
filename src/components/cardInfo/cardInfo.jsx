import React from 'react';
import CardInfoCl from './cardInfo.module.scss';
import OldPrice from '../oldPrice/oldPrice';
import Price from '../price/price';


const CardInfo = (props) => {

  let GetDate = new Date(props.dataItems.date);
  const dataTime = GetDate.toLocaleDateString() + ', ' 
    + GetDate.getHours()+ '.' + GetDate.getMinutes();

  const cardInfoBackground = () => {
    if(props.dataItems.seen){
      return { background: "rgb(255, 246, 165)"};
    }
    else {
      return { background: "white" };
    }
  };

  return(
    <div className={CardInfoCl.info} style={cardInfoBackground()}>
      <div className={props.dataItems.seen===false? CardInfoCl.starIcon : CardInfoCl.starIconChecked}></div>
      <div className={props.dataItems.seen===false? CardInfoCl.deliveryIcon : CardInfoCl.deliveryIconChecked}></div>
      <OldPrice oldprice={props.dataItems.oldPrice}/>
      <Price price={props.dataItems.price}/>
      <div className={CardInfoCl.cardName}>{props.dataItems.title}</div>
      <div className={CardInfoCl.cityDate}>
        <span>{props.dataItems.locality}</span>
        <span>{dataTime}</span>
      </div>
    </div>    
  );
}

export default CardInfo;