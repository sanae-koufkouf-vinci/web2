
import { SyntheticEvent, useState } from 'react';
import './Main.css'
import PizzaMenu from './PizzaMenu';
import sound from "/src/assets/sounds/Infecticide-11-Pizza-Spinoza.mp3"
import { NewPizza, Pizza } from '../../types';
import AddPizza from "./AddPizza";

const defaultPizzas = [
  {
    id: 1,
    title: "4 fromages",
    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
  },
  {
    id: 2,
    title: "Vegan",
    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
  },
  {
    id: 3,
    title: "Vegetarian",
    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  },
  {
    id: 4,
    title: "Alpage",
    content: "Gruyère, Mozarella, Lardons, Tomates",
  },
  {
    id: 5,
    title: "Diable",
    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
  },
];

const Main = () => {
 
  const [pizzas, setPizzas] = useState(defaultPizzas);

  const addPizza = (newPizza:NewPizza) => {   
    const pizzaAdded = { ...newPizza, id: nextPizzaId(pizzas) };
    setPizzas([...pizzas, pizzaAdded]);
  };

  return (
    <main>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; )
      </p>
      <audio id="audioPlayer" controls >
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <PizzaMenu pizzas={pizzas} />
      <div>
        <br />
        <AddPizza addPizza={addPizza} />
      </div>
      
    </main>
  );
};


const nextPizzaId = (pizzas: Pizza[]) => {
  return pizzas.reduce((maxId, pizza) => Math.max(maxId, pizza.id), 0) + 1;
};

  
  export default Main;