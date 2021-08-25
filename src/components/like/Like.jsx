import React from 'react';
import likeCl from './like.module.scss';

const Like = (props) => {
  return(
    <div className={likeCl.like}>
      <label>
        <input className={likeCl.likeCheckbox} type="checkbox" />
        <span className={props.data===false? likeCl.likeIcon : likeCl.likeIconChecked}></span>
      </label>
    </div>
  );
}

export default Like;