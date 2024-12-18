import { useState } from 'react'

function App() {

  // let counter = 10;
  const [counter, setCount] = useState(10);
  const addValue = () => {
    
    setCount(counter+1);
    console.log(counter);
  }

  const subValue = () => {
    setCount(counter-1);
    console.log(counter);
    
  }

  return (
    <>
      
      <h1> This is the reactvite2 page -- {counter}</h1>
      <h2>count value is : {counter}  </h2>

      <button onClick={addValue}>increment</button> {}
      <button onClick={subValue}>Decrement</button>

      <p> This is end and count value is : {counter} </p>
      
    </>
  )
}

export default App
