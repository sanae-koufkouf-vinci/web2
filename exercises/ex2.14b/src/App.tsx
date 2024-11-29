
import { useState } from 'react';
import './App.css'
import RandomDog from './RandomDog'

interface Dog {
  message: string;
  status: string;
}

const App =() => {
 

  return (
    <>
    <div>
    <RandomDog  />
    <RandomDog  />
    <RandomDog  />

     
    </div>
     
    </>
  )
}

export default App;
