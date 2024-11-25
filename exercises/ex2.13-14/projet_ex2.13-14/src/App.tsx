import { useEffect, useState } from 'react'

import './App.css'
import Joke from './assets/types';

const App = ()=> {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke({
        text : data.joke ?? "No joke found",
        category: data.category ?? "Unknown",
      });
    });
      // je sais que l' api va me renvoyer sous format json : qqch qui a un joke et  un category car c'est marque dans la documentation.
  }, []);

  if(!joke){
    return(<p>Loading../</p>);
  }

  return (
    <>
    <div>
     <h1>Here is a funny joke</h1>
     
     <p>{joke.text}</p>
     <p>Type : {joke.category}</p>
     
    </div>
    </>
  )
}

export default App
