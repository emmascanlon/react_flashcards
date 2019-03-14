import React from "react";
import Card from "./Card";
import {Grid, } from "semantic-ui-react"


const Cards = ({ cards, remove, }) => (
  <Grid columns={3} divided>
      <Grid.Row>
  {
    cards.map( card => (
      <Card key={card.id} {...card} remove={remove} />
    ))
  }
  </Grid.Row>
  </Grid>
)


export default Cards;