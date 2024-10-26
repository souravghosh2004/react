import { useRef,useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [password, setPassword] =  useState('');
  const [length, setLength] =  useState(8);
  const [numberAllowed, setNumberAllow]  =  useState(false);
  const [specailCh, setSpecailCh]  =  useState(false);
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONOPQRSTUVWXYZ';
    if(numberAllowed){
      str += '0123456789';
    }
    if(specailCh){
      str +=  '!@#$%^&*()_+~`|}{[]:;?><,./-';
    }
    for(let i = 1; i <=length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length +1));
    }
    setPassword(pass);
  },[length,numberAllowed,specailCh])

  useEffect(() => {
    passwordGenerator();
  },[length,numberAllowed,specailCh,setPassword])

 

  const copy =  useCallback (() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  
  return (
    <>
      <div className="main">
        <div className="mainn">
          <div className="pas">
            <p>PASSWORD GERERATOR</p>
            <div>
              <input
                type='text'
                id='pa'
                placeholder='PASSWORD'
                value={password}
                ref={passRef}
                readOnly // make it read-only so that the user cannot edit the generated password
              />
              <button onClick={copy}>COPY</button>
            </div>
          </div>
          <div className="sec">
          <input 
          id='ra'
            type='range'
            min={6}
            max={50}
            value={length}
            onChange={(e) =>  setLength(e.target.value)}
          />
          <label >Length : {length}</label>
          <label> SpecailCharacter</label>
          <input
            type='checkbox'
            onClick={() => {
              setSpecailCh((prev) => !prev);
            }}
          />
          <label>Number</label>
          <input
            type='checkbox'
            onClick={() => {
              setNumberAllow((prev) => !prev);
            }}
          />
         
          </div>
        </div>
      </div>
    </>
  )
}

export default App


/*function App() {
  // Define a state variable for the password
  const [password, setPassword] = useState(''); // Initialize it with an empty string

  return (
    <>
      <div className="main">
        <p>PASSWORD GENERATOR</p>
        <div>
          <input
            type='text'
            id='pa'
            placeholder='PASSWORD'
            value={password}
            readOnly // make it read-only so that the user cannot edit the generated password
          />
        </div>
      </div>
    </>
  )
}

export default App*/
