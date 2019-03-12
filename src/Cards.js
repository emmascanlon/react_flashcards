import React from "react";
import Card from "./Card";


const Cards = ({ cards, remove, showBack, frontShown, }) => (
  <div>
  {
    cards.map( card => (
      <Card key={card.id} {...card} remove={remove} showBack={showBack} frontShown={frontShown}/>
    ))
  }
  </div>
)


export default Cards;