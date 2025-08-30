import {useState} from 'react';
import Button from './button';
function App() {
  let [Color,setColor]= useState("olive");
  function changecolor(value){
    if(value==="red")setColor(Color="red");
    else if(value==="blue")setColor(Color="blue");
    else if(value==="green")setColor(Color="green");
    else if(value=="white")setColor(Color="white");
    else if(value=="lavender")setColor(Color="lavender");
    else if(value=="purple")setColor(Color="purple");
    else if(value=="black")setColor(Color="black");
    else if(value=="yellow")setColor(Color="yellow");
    else if(value=="orange")setColor(Color="orange");
    else if(value=="gray")setColor(Color="gray");
    else if(value=="crimson")setColor(Color="crimson");
    else if(value=="olive")setColor(Color="olive");



  }

  return (
    <>
      <div className="w-full h-screen duration-200 "
      style={{backgroundColor: Color}}
      >
        <div className="bg-white fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 shadow-lg rounded-xl ">

        <div className='flex flex-wrap px-3 py-2 justify-center gap-3 shadow-lg bg-white rounded-3xl bg-white '>
          <button className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"red"}} onClick={()=>{changecolor("red")}} >
          red</button></div>
          <Button label={"green"}changecolor={()=>{changecolor("green")}} /> 
          <Button label={"purple"}changecolor={()=>{changecolor("purple")}} /> 
          <Button label={"lavender"}changecolor={()=>{changecolor("lavender")}} /> 
          <Button label={"yellow"}changecolor={()=>{changecolor("yellow")}} /> 
          <Button label={"black"}changecolor={()=>{changecolor("black")}} />  
          <Button label={"white"}changecolor={()=>{changecolor("white")}} /> 
          <Button label={"blue"}changecolor={()=>{changecolor("blue")}} /> 
          <Button label={"orange"}changecolor={()=>{changecolor("orange")}} /> 
          <Button label={"crimson"}changecolor={()=>{changecolor("crimson")}} /> 
          <Button label={"gray"}changecolor={()=>{changecolor("gray")}} /> 
          <Button label={"olive"}changecolor={()=>{changecolor("olive")}} /> 

         {/* <div className='flex flex-wrap px-3 py-2 justify-center gap-3 shadow-lg bg-white rounded-3xl bg-white '>
          <button className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"green"}}>
          green</button></div>
           <div className='flex flex-wrap px-3 py-2 justify-center gap-3 shadow-lg bg-white rounded-3xl bg-white '>
          <button className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"blue"}}>
          blue</button></div>
           <div className='flex flex-wrap px-3 py-2 justify-center gap-3 shadow-lg bg-white rounded-3xl bg-white '>
          <button className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"yellow"}}>
          yellow</button></div> */}
        </div>
      </div>
    </>
  )
}

export default App
