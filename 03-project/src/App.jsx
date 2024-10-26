/*import { useState } from 'react'
import './App.css'

function App() {
  
  const [redColor,setRED] = useState('initial')

  const rendi= () => {
    setRED('red');
  };
  return (
   <>
   <div className='main'>
        <button 
        onClick={rendi} 
        style={{ backgroundColor: 'red' }}
        >
        RED COLOR
      </button>
      <button 
        onClick={GREEn} 
        style={{ backgroundColor: 'green' }}
        >
        RED COLOR
      </button>
    </div>
   </>
  )
}

export default App
*/
import { useState } from 'react';
import './App.css';

function App() {
  
  const [color, setColor] = useState('initial');

  const handleRedClick = () => {
    setColor('red');
  };

  const handleGreenClick = () => {
    setColor('green');
  };
  const yellowColor  = () => {
    setColor('yellow');
  }

  return (
   <>
     <div className='main'
      style={{ backgroundColor: color  }}
     >
       <button 
       id='re'
         onClick={handleRedClick} 
         style={{ backgroundColor: 'red' }}
       >
         RED COLOR
       </button>
       <button 
         onClick={handleGreenClick} 
         style={{ backgroundColor: 'green'}}
       >
         GREEN COLOR
       </button>
       <button 
         onClick={yellowColor} 
         style={{ backgroundColor: 'yellow'}}
       >
         YELLOW COLOR
       </button>
     </div>
   </>
  );
}

export default App;
