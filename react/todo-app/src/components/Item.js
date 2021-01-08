import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Item = ({ content }) => {

    // const [isCompleted, setStatus] = useState(false);

    return (
        <li>{content}</li>
    )
}

export default Item;

