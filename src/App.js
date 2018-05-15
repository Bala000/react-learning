import React, { Component } from 'react';
import classes from './App.css';
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

    let persons = null;
    let btnClass = '';
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
    btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2)
    {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1)
    {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
       <h1>Hello - world</h1>
       <p className={assignedClasses.join(" ")}> This is a status paragraph</p>
       <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
