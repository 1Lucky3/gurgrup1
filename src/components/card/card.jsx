import React from 'react';
import CardClasses from './card.module.scss';
import Compare from '../compare/compare';
import Like from '../like/Like';
import SliderButtons from '../sliderButtons/sliderButtons';
import CardInfo from '../cardInfo/cardInfo';




const Card = (props) => {

  function checkSeen(){
    if(props.data.seen){
      return <div className={CardClasses.checked}>Просмотрено</div>
    }
    else{
      return <></>
    }
  }
  return (
    <div className={CardClasses.wrapper}>
      <div className={CardClasses.picture}>
        {checkSeen()}
        <Compare data={props.data.seen}/>
        <Like data={props.data.seen}/>
        <SliderButtons />
      </div>
      <CardInfo dataItems={props.data} />
    </div> 
  );
  
}

export default Card;