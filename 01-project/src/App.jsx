import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCount] =  useState(17)  
  //let count = 0;
  const addVAlue = () => {
    if(count<20){
      count += 1;
    }  
    setCount(count);
    console.log("Count = ",count);    
  }

  const removeValue = () => {
    if(count>0){
      count -= 1;
    }
    setCount(count);    
  }

  return (
    <>
     <h1>Counter</h1>
     <h3>COUNT =  {count}</h3>
     <button onClick={addVAlue}>ADD ONE</button>
     <button onClick={removeValue}>REMOVE ONE</button>
     <p>first place :  {count}</p>
     <p>second place : {count}</p>
     <p>third place :  {count}</p>
     <p>fourth place : {count}</p>
     <p>fifth place : {count}</p>

    </>
  )
}

export default App
