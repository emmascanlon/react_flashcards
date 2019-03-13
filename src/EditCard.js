// import React from "react";
// import { Form, } from "semantic-ui-react";

// class CardForm extends React.Component {
//   state = { front: this.state.front, back: "this.state.back", frontShown: true, };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.add(this.state);
//     this.setState({ front: "", back: "", });
//   }
//     handleChange = (e) => {
//       this.setState({ [e.target.name]: e.target.value, });
//     };

//     render() {
//       return (
//         <Form onSubmit={this.handleSubmit}>
//         <Form.Group widths="equal">
//         <Form.Input
//         fluid
//         label= "Front"
//         placeholder= {this.state.front}
//         name = "front"
//         value={this.state.front}
//         onChange={this.handleChange}
//         />
//         <Form.Input
//         fluid
//         label = "Back"
//         placeholder = {this.state.back}
//         name = "back"
//         value={this.state.back}
//         onChange={this.handleChange}
//         />
//         <Form.Button>Submit</Form.Button>
//         </Form.Group>
//         </Form>
//       )
//     }
//   }

//   export default EditCard;