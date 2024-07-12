import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(15);

  const addCount = () => {
    count = count + 1;
    console.log(`Counter Value : ${count}`);
    setCount(count);
  }

  const removeCount = () => {
    count = count - 1;
    console.log(`Counter Value : ${count}`);
    setCount(count);
  }

  return (
    <>
      <h1>Code with MayMar25</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={addCount}>Add Value {count}</button>
      <button onClick={removeCount}>Remove value {count}</button>
    </>
  )
}

export default App
