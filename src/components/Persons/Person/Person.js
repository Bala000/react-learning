import React from 'react';
import classes from './Person.css';
const person = (props) => {
    const rand = Math.random();
    if(rand>0.9)
    {
        throw new Error("artificial error thrown");
    }
    return (
    <div className={classes.Person}>
        <p onClick = {props.click}>I am {props.name} and I am {props.age} years young</p>
        <input type="text" onChange={props.change} value={props.name}/>
        <p>{props.children}</p>
    </div>
        )
}

export default person;