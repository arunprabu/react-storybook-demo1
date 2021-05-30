import React from 'react';
import './footer.css';

export const Footer = (props) => {
  console.log(props);
  return (
    <div>
      <hr/>
      <p className={props.align}>Copyright 2021 - Arun - {props.children}</p>
    </div>
  )
}
