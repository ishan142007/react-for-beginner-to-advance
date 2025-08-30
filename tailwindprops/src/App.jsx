import { useState } from 'react'
import Card from './components/card'

import './App.css'


function App() {
  let myobj={
    name:"ishan",
    age:20
  }
let list=Object.values(myobj);
let username="ishan";
let cardtext="hello how are you ";
let newarr=[1,2,3];
let message="this is showing that we can pass array as well in the parameters and we can also pass them directly";
  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-2xl mb-4'>Tailwind test</h1>
      <Card 
      username={username}
      cardtext={cardtext}
      />
      <Card 
      username={list[0]}
       cardtext={list[1]}
       />
      <Card 
      username={[1,2,3]} 
      cardtext={message}
      />
      
    </>
  )
}

export default App
