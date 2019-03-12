import React from "react";
import { Button, } from "semantic-ui-react"

const Card = ({ id, front, back, frontShown, remove, showBack, }) => (
<div>
  <h3> {front} </h3>
<h3>{ frontShown ? [<br />]: back  }</h3>
        <Button color="blue" onClick={() => remove(id)}> Delete</Button>
        <Button color="green" onClick={() =>showBack()} >{frontShown ? "Show Answer" : "Hide Answer" }</Button>
</div>
);


export default Card;