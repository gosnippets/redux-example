import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addition, subtraction } from './redux/operationSlice';

function App() {
  const [inputValue, setInputValue] = useState("")
  const total = useSelector((state)=>state.operation.total)

  const dispatch= useDispatch();

  const handleSum = () => {
    console.log("HandleSum", inputValue)
    dispatch(addition(inputValue))
  }
  const handleSub = () => {
    console.log("HandleSub", inputValue)
    dispatch(subtraction(inputValue))
  }
  return (
    <div className="App">
      <h2>Total = {total}</h2>
      <input type="number" placeholder='Please enter number' onChange={(event) => setInputValue(Number(event.target.value))} />
      <br /><br />
      <button onClick={handleSum}>Add</button>
      <button onClick={handleSub}>Subtract</button>

    </div>
  );
}

export default App;
