// import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Example from  './Example';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      {/* <h1>My name is Lionel. Hello Austin!</h1> */}
      <Name name="Lionel"/>
      <Name name="Mary"/>
      <Name name="Talon" />

      <Example innerExample="hello there" />

      <h2>I like to code.</h2>
    </div>
  );
}

export default App;
