import { useState } from 'react'


import './App.css'

function App() {
  let [counter,setCounter]=useState(5) ;


  // let counter =5;
  const addvalue =()=>{
    // counter++;
    if(counter<20){

      setCounter(counter + 1);
    }
    // console.log("clicked",counter);
    
  }
  const deletevalue=( )=>{
    if(counter>0){

      setCounter(counter - 1);
    }
    // console.log("value deleted",Math.random())
    
  }


  return (
    <>
    <h1>react and my counter</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addvalue}>Add value</button><br />
    <button onClick={deletevalue}>remove value</button>
    </>
  )
}

export default App
