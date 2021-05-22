import './App.css';
import Component1 from './Components/component1'
import {useState} from 'react'

function App() {

  const [emailInfo, setEmailInfo] = useState(1)
  
  const clickHandler = (e) => {
    e.preventDefault()
    setEmailInfo(emailInfo * 3)
    
  }

  return (
    <div className="App">
      Swiftgenda
      <Component1 text= {'clicked #' + emailInfo} />
      <button onClick={clickHandler} >btn</button>
    </div>
  );
}

export default App;
