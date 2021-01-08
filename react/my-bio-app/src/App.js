import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Hobby from './components/Hobby';
import FunFact from './components/FunFact';


function App() {

  // I need three components
  // one that will show my name
  // one that will show my hobby
  // one that will show a fun fact

  return (
    <div>
      <Name yourName="My name is Lionel." />
      <Hobby />
      <FunFact />
    </div>
  );
}

export default App;
