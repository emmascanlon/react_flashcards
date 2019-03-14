import React from "react";
import { Button, Segment, Header, Icon, Grid, } from "semantic-ui-react"
import EditCard from "./EditCard"

class Card extends React.Component  {
  state = {frontShown: true, numberCorrect: 0, numberWrong: 0, }

  toggleCard = () => this.setState({ frontShown: !this.state.frontShown });

  addCorrect = () => this.setState({numberCorrect: this.state.numberCorrect + 1 })
    
  

  addWrong = () => this.setState({ numberWrong: this.state.numberWrong + 1 })
  
  
  render () {
    const {id, front, back, remove } = this.props
    const {frontShown, numberCorrect, numberWrong} = this.state
    return ( 
      
     <Segment>
    <Grid.Column>
      <Header>Question: {front} </Header>
      <h3>Answer: { frontShown ? [<br />]: back  }</h3>
        
        <Button color="violet" onClick={this.addCorrect}><a> <Icon color = "yellow" size='large' name="thumbs up outline"/> </a></Button>
        <Button color = "orange" onClick={this.addWrong}><a> <Icon  color = "yellow" size='large' name="thumbs down outline"/> </a></Button>
        <br />
        <div id="countDiv"><p id= "correct" className= "count">{numberCorrect}</p>
         <p className = "count" id= "center">||</p> <p className = "count" color="violet" id="wrong"> {numberWrong} </p></div>
        <Button color="green" onClick={() =>this.toggleCard()} ><a><Icon color = "yellow" size = "large"
        name = {frontShown ? "eye" : "eye slash" }/></a></Button>
        <Button color="red" onClick={() => remove(id)}> <a><Icon color= "yellow" size = "large" name= "trash alternate outline"/></a></Button>
        <Button color="blue" ><a><Icon color="yellow" size = "large" name= "edit outline"/></a></Button>
        </Grid.Column>
   </Segment>
    )
    }
}

export default Card;