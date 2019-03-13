import React from "react";
import { Button, Segment, Header, } from "semantic-ui-react"
import EditCard from "./EditCard"

class Card extends React.Component  {
  state = { frontShown: true }

  toggleCard = () => this.setState({ frontShown: !this.state.frontShown });


  
  render () {
    const {id, front, back, remove } = this.props
    const {frontShown} = this.state
    return ( 
     <Segment>
    
      <Header>Question:  {front} </Header>
     
      <h3>Answer: { frontShown ? [<br />]: back  }</h3>
        <Button color="green" onClick={() =>this.toggleCard()} >{frontShown ? "Show Answer" : "Hide Answer" }</Button>
        <Button color="red" onClick={() => remove(id)}> Delete</Button>
        <Button color="blue" >Edit</Button>
   </Segment>
    
    )
    }
}

export default Card;