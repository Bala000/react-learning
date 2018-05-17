import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      {id: 'qwer',name: "Bala", age: 24},
      {id: 'qwert',name: "priya", age: 22},
      {id: 'qwerty',name: "Sonali", age:20}
    ],
    otherState: "nothing just another state",
    togglePerson: false
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {return id===p.id});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person; 
    this.setState({
      persons: persons
    });
  }
  togglePersonsHandler = () =>
 {
 
    this.setState({
      togglePerson: !this.state.togglePerson
     });
 }


 deletePersonHandler = (personIndex) => {
   //const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
   persons.splice(personIndex,1);
   this.setState({persons:persons});
 }
  render() {

    let persons = null;
    
    if(this.state.togglePerson)
    {
      persons = (
         <Persons 
         persons={this.state.persons}
         clicked = {this.deletePersonHandler}
         changed = {this.nameChangeHandler}
         />);
    }


    return (
      <div className={classes.App}>
      <Cockpit 
        clicked={this.togglePersonsHandler}
        togglePerson = {this.state.togglePerson}
        persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

export default App;
