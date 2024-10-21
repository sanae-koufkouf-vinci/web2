import Cinema from "./components/Cinema/Cinema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle/PageTitle";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      id:1,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      id:2,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      id:3,
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      id:4,
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];
  
  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      id:5,
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      id:6,
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      id:7,
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      id:8,
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ]; 

  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1488301035/fr/photo/acheter-des-billets-de-cin%C3%A9ma.jpg?s=612x612&w=is&k=20&c=7nmdoaLknvCipH2XULcfsLCPO-ky56q1O1FUt97gu2s="> 
        <p>voici le header de notre site</p>
      </Header>
      <PageTitle title={pageTitle} />
      <Cinema name={cinema1Name} movies={moviesCinema1}>
        </Cinema>
      <Cinema name={cinema2Name} movies={moviesCinema2}  >
      </Cinema>
      <Footer urlLogo="https://media.istockphoto.com/id/1488301035/fr/photo/acheter-des-billets-de-cin%C3%A9ma.jpg?s=612x612&w=is&k=20&c=7nmdoaLknvCipH2XULcfsLCPO-ky56q1O1FUt97gu2s="> 
        <p>voici le footer de notre site</p>
      </Footer>
      </div>
      
  );
};

export default App;
