import React from 'react';
import './card.css';

export function Card(props) {

  const { variant, layout } = props;
  const cssStyle = `${variant} ${layout}`;
  return (
    <section className={cssStyle}>
      {props.label}
    </section>
  )
}
