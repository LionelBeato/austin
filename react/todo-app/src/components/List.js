import React, { useState } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const List = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <Item
                    key={uuidv4()}
                    content={todo} />
            ))}
        </ul>
    )
}

export default List; 