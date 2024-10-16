import './Main.css'
import PizzaMenu from './PizzaMenu';
import sound from "/src/assets/sounds/Infecticide-11-Pizza-Spinoza.mp3"


const Main = () => {
  return (
    <main>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; )
      </p>
      <audio id="audioPlayer" controls autoPlay>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <PizzaMenu />
    </main>
  );
};

  
  export default Main;