import { useEffect, useState } from "react";

import "./App.css";
import Joke from "./assets/types";

const App = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  
  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke({
          text: data.joke ?? "No joke found",
          category: data.category ?? "Unknown",
        });
      });
  }

  useEffect(() => {
    fetchJoke();
    const interval = setInterval(fetchJoke,10000)
    // ici je ne dois pas appler la fonction je dois juste donner la def de la fonction sinon ca va s'executer avant meme les 1000 MS donc bien faire attentin à ca et comprendre 
    return () => clearInterval(interval);//sert à rien dans mon code sert juste à detruire l'intereval qd le useEffect est detruit ex: qd on change de page N:B la fonction de nettoyage est appelée à chaque fois que la variable [] est mise à jour il le fait avant de recreer le nvx  useEfect
    // je sais que l' api va me renvoyer sous format json : qqch qui a un joke et  un category car c'est marque dans la documentation.
  }, []);

  if (!joke) {
    return <p>Loading../</p>;
  }

  return (
    <>
      <div>
        <h1>Here is a funny joke</h1>

        <p>{joke.text}</p>
        <p>Type : {joke.category}</p>
      </div>
    </>
  );
};

export default App;
