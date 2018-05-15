import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
    <div className="Person" style={style}>
        <p onClick = {props.click}>I am {props.name} and I am {props.age} years young</p>
        <input type="text" onChange={props.change} value={props.name}/>
        <p>{props.children}</p>
    </div>
        )
}

export default Radium(person);