import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INC'})
  }

  const decrement = () => {
    dispatch({ type: 'DEC' })
  }

  const addBy = () => {
    dispatch({ type: 'ADD', payload: 10 })
  }

  const subBy = () => {
    dispatch({ type: 'SUB', payload: 10 })
  }

  return (
    <div className="App">
      <h2>Counter App</h2>
      <h2>{counter}</h2>
      <button onClick={addBy}>Add By 10</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={subBy}>Sub By 10</button>
    </div>
  );
}

export default App;
