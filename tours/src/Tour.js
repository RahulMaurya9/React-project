import React, { useState } from 'react';

const Tour = (props) => {
  return (
    <section className = "single-tour">
      <img src={props.image} alt={props.name}/>
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">${props.price}</h4>
        </div>
      </footer>


    </section>
  )
};

export default Tour;
