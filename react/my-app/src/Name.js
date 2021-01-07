import React, { useState } from 'react';

// i want to make a component
// that will house my name
const Name = (props) => {
    // this holds the value of my name
    const myName = `Lionel`;
    const element = <h2>This is embedded JSX</h2>;

    // useState is where you define your default state
    const [state, setState] = useState(0);

    // this renders my jsx/html
    return (
        <div>
            {/* <h1>My name is {myName}</h1> */}
            <h1>My name is {props.name}</h1>
            {element}
            <h2>{state}</h2>
            <button onClick={() => setState(state + 1)}>
                Click me
            </button>
        </div>

    )
}

export default Name;