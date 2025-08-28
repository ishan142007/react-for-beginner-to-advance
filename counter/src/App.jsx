import { useState } from 'react'


import './App.css'

function App() {
  let counter =5;
  const addvalue =()=>{
    counter++;
    console.log("clicked",counter);
    
  }
  const deletevalue=( )=>{
    console.log("value deleted",Math.random())
    
  }


  return (
    <>
    <h1>react and my {counter}</h1>
    <h2>counter value:5</h2>
    <button onClick={addvalue}>Add value</button><br />
    <button onClick={deletevalue}>remove value</button>
    </>
  )
}

export default App
