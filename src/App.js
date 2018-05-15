import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
         backgroundColor: 'lightgreen',
         color: 'black'
      } 
    };

    let persons = null;
    if(this.state.togglePerson)
    {
      persons = (
     <div>
       {
         this.state.persons.map( (person,index) => {
           return (
           <Person 
            name ={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            change={(event) => this.nameChangeHandler(event, person.id)}
            />
          );
         })
       }
     
    </div> );
    
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: 'salmon',
      color: 'black'
    };
    }

    const classes = [];
    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <=1)
    {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
       <h1>Hello - world</h1>
       <p className={classes.join(" ")}> This is a status paragraph</p>
       <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
