import React from "react";
import Card from "./Card";


const Cards = ({ cards, remove }) => (
  <div>
  {
    cards.map( card => (
      <Card key={card.id} {...card} remove={remove} />
    ))
  }
  </div>
)


export default Cards;