import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { useState } from 'react';

function App() {

  // const myFunc = (a, b, c, ...rest) => {

  // }

  // function sum(x, y, z) {
  //   return x + y + z; 
  // }

  // const numbers = [1, 2, 3];

  // console.log(sum(...numbers));

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>

      <form
        onSubmit={event => {
          event.preventDefault();
          const todosCopy = [...todos];
          todosCopy.push(value);
          setTodos(todosCopy);
        }}
      >
        <input
          type="text"
          value={value}
          onChange={event => {
            setValue((event.target.value));
          }}>
        </input>
        <input
          type="submit"
          value="Submit" />
      </form>


      <List todos={todos} />
    </div>
  );
}

export default App;
