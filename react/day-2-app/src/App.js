// import logo from './logo.svg';
import './App.css';
import Example from './components/Example';

function App() {

  // any function that exists in a component
  // can return jsx
  const myFunc = () => <div>this is from emdedded jsx</div>

  // this function will capture an event
  const handleClick = (event) => {
        event.preventDefault();
        console.log("you clicked on a thing!");
  }

  // this event parameter can be called anything
  // using e is very common
  const handleHover = (e) => {
    e.preventDefault();
    console.log("you are hovering over a thing");
  }

  return (
    <div>
      <Example burger="Impossible Burger" 
               name="Lionel"/>
      {myFunc()}
      <button onClick={handleClick}>Click Me!</button>
      <h1 onMouseOver={handleHover}>Hover over me!</h1>
    </div>
  );
}

export default App;
