import React, { Component } from 'react';
import { Container, Header, Button, Icon, Segment, } from "semantic-ui-react";
import './App.css';
import Cards from "./Cards";
import CardForm from "./CardForm"

class App extends Component {
  state = {
    cards: [
      {id: 1, front: "2 + 2", back: "4",  },
      {id: 2, front: "2 + 3", back: "5",  },
      {id: 3, front: "2 + 4", back: "6",  },
      {id: 4, front: "2 + 5", back: "7",  },
      {id: 5, front: "2 + 6", back: "8",  },
      {id: 6, front: "2 + 7", back: "9",  },
    ],
    showForm: false,

    }

  

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000); 
  };

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card
    });
      this.setState({ cards: [...cards], });
    };

  render() {
    return (
      <Container>
       <Header as="h1" alignItems="center">Flashcards App</Header>
       <br />
       <Segment basic>
       <Button icon color="blue" onClick={this.toggleForm}>
      <Icon name={this.state.showForm ? "double angle up" : "double angle down"} />
       </Button>
       { this.state.showForm ? <CardForm add={this.addCard} />
       : null }
       </Segment>
       <br />
       <Cards cards={this.state.cards} remove={this.removeCard}/>
      </Container>
    );
  }
}

export default App;
