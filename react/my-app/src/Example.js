import React from 'react';

class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = 4;
    }

    render() {
        return (
            <div>
                Hello, I'm in a class component! 
                <h2>{this.props.innerExample}</h2>
                <h2>This is the state of Example: {this.state}</h2>
            </div>
        )
    }
}

export default Example;