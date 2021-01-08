import React, { useState } from 'react';

const Name = ({ yourName }) => {

    const [state, setState] = useState('');

    return(
        <p>{yourName}</p>
    )
}

export default Name;