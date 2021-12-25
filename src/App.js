// import logo from './logo.svg';
// import './App.css';

import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  // Use state to save/modify data
  state = {
    people: [],
  }

  // Functions to manipulate state //

  removePerson = (index) => {
    const {people} = this.state 
    
    // Create a new modified array, one without the passed index
    this.setState({
      people: people.filter((person, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (person) => {
    // Add a new person to what is existing in the state
    this.setState({people: [...this.state.people, person]})
  }

  // ----------------------------- //

  render() {
    const {people} = this.state

    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Add some people.</p>
        <Table 
          peopleData={people} 
          removePerson={this.removePerson} 
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
