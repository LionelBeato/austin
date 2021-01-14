import React, { useState } from 'react';
import '../styles/Name.css';

const Name = ({ yourName }) => {

    const [state, setState] = useState('');

    return(
        <p className="name">{yourName} 🦁</p>
    )
}

export default Name;