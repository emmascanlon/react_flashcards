import React from "react";
import { Button, } from "semantic-ui-react"


class Card extends React.Component  {
  state = { frontShown: true }

  toggleCard = () => this.setState({ frontShown: !this.state.frontShown });
  
  render () {
    const {id, front, back, remove } = this.props
    const {frontShown} = this.state
    return ( 
    <div>
      <h3> Question: {front} </h3>
      <h3>Answer: { frontShown ? [<br />]: back  }</h3>
        <Button color="blue" onClick={() => remove(id)}> Delete</Button>
        <Button color="green" onClick={() =>this.toggleCard()} >{frontShown ? "Show Answer" : "Hide Answer" }</Button>
    </div>
    )
    }
}

export default Card;