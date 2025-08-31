import { useState,useCallback,useEffect,useRef } from 'react'




function App() {
  const [length, setlength] = useState(8)
  const [numall,setnumall] =useState(false)
  const [charall,setcharall]=useState(false)
  const[password,setpassword]=useState("")
  //ref hook
  const passwordRef=useRef(null)


  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numall)str +="0123456789"
    if(charall)str+="@*_#!"
    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length +1)
      pass +=str.charAt(char)
      setpassword(pass)
    }

  },[length,numall,charall,setpassword])
  
  
  const copypassword= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
    alert("copied")
  },[password])


  useEffect(()=>{passwordGenerator()},[length,numall,charall,passwordGenerator])

  return (
    < div className=" flex justify-center ">
    <div className="w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center flex flex-col justify-center align-center">
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-center bg-white '>
      <input type="text"
        value={password}
        className='outline-hidden w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
       />
       <button
       onClick={copypassword}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sum gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}

          />
          <label >Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numall}
            id="numberInput"
            onChange={()=>{
              setnumall((prev)=>!prev);
            }}
            
          />
          <label >Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charall}
            id="characterInput"
            onChange={()=>{
              setcharall((prev)=>!prev);
            }}
            
          />
          <label >Character</label>
          </div>
      </div>
    </div>

    </div>
  )
}

export default App
