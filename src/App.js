import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from './redux/operationSlice';
import FormValidation from './components/FormValidation';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [inputValue2, setInputValue2] = useState("")

  const { total, usersList, status, error } = useSelector((state) => state.operation)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser())
  }, [])

  useEffect(() => {
    console.log("operationState", total, usersList, status, error)
  }, [total, usersList, status, error])

  const handleSum = () => {
    console.log("HandleSum", inputValue, inputValue2)
    // dispatch(addition({ a: inputValue, b: inputValue2 }))
  }
  const handleSub = () => {
    console.log("HandleSub", inputValue)
    // dispatch(subtraction(inputValue))
  }
  return (
    <div className="App">
      <FormValidation /><br/><br/>
      <h2>Total = {total}</h2>
      <input type="number" placeholder='Please enter number1' onChange={(event) => setInputValue(Number(event.target.value))} />
      <input type="number" placeholder='Please enter number2' onChange={(event) => setInputValue2(Number(event.target.value))} />
      <br /><br />
      <button onClick={handleSum}>Add</button>
      <button onClick={handleSub}>Subtract</button>

    </div>
  );
}

export default App;
