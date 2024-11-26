
import { useState } from 'react';
import './App.css'
import RandomDog from './RandomDog'

interface Dog {
  message: string;
  status: string;
}

const App =() => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
    <div>
    <RandomDog key={`${refresh}1`} />
    <RandomDog key={`${refresh}2`} />
    <RandomDog key={`${refresh}3`} />

      <button 
      onClick={()=>setRefresh(!refresh)}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "1em",
        cursor: "pointer",
      }}
      > Refresh dog</button>
    </div>
     
    </>
  )
}

export default App;
