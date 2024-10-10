import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultMovies: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160,
      description: "https://example.com/inception.jpg",
      imageUrl: "https://example.com/inception.jpg",
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      budget: 63,
      description: "https://example.com/matrix.jpg",
      imageUrl: "https://example.com/matrix.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      director: "Christopher Nolan",
      duration: 169,
      budget: 86,
      description: "https://example.com/interstellar.jpg",
      imageUrl: "https://example.com/interstellar.jpg",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      duration: 142,
      budget: 25,
      description: "https://example.com/shawshank.jpg",
      imageUrl: "https://example.com/shawshank.jpg",
    },
    {
      id: 5,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      budget: 185,
      description: "https://example.com/darkknight.jpg",
      imageUrl: "https://example.com/darkknight.jpg",
    },
  ];

  function readAllFilms(minDuration: number | undefined): Film[] {
    const films = parse(jsonDbPath, defaultMovies);
    if (!minDuration) {
      return films;
    }
    const minDurationNumber = Number(minDuration);

    const filteredFilms = films.filter((film) => {
      return film.duration >= minDurationNumber;
    });
    return filteredFilms;
  }

  function readOneFilm(id: number): Film | undefined {
    const films = parse(jsonDbPath, defaultMovies);
    const film = films.find((film) => film.id === id);
    if (!film) {
      return undefined;
    }
    return film;
  }

  function createOneFilm(newFilm: NewFilm): Film | undefined {
    const films = parse(jsonDbPath, defaultMovies);
  
    const nextId =
      films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
      1;
  
    const createdFilm = {
      id: nextId,
      ...newFilm,
    };

    const existingFilm = films.find((film)=>
      film.title.toLowerCase()=== createdFilm.title.toLowerCase() && 
    film.director.toLowerCase()=== createdFilm.director.toLowerCase() );
    
    if(existingFilm){
      return undefined;
    }
    films.push(createdFilm);
    serialize(jsonDbPath, films);
  
    return createdFilm;
  }

  function deleteOneFilm(filmId: number): Film | undefined {
    const films = parse(jsonDbPath, defaultMovies);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
      return undefined;
    }
    const deletedElements = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return deletedElements[0];
  }

  function updateOneFilm(
    filmId: number,
    newFilm: Partial<NewFilm>
  ): Film | undefined {
    const films = parse(jsonDbPath, defaultMovies);
    const film = films.find((film) => film.id === filmId);
    if (!film) {
      return undefined;
    }
  
    if (newFilm.title !== undefined) {
      film.title = newFilm.title!; // the router already checks for the presence of title
    }
    if (newFilm.director !== undefined) {
      film.director = newFilm.director!;
    }
    if (newFilm.duration !== undefined) {
      film.duration = newFilm.duration!;
    }
    if (newFilm.budget !== undefined) {
      film.budget = newFilm.budget!;
    }
    if (newFilm.description !== undefined) {
        film.description = newFilm.description;
      }
      if (newFilm.imageUrl !== undefined) {
        film.imageUrl = newFilm.imageUrl;
      }
    serialize(jsonDbPath, films);
    return film;
  }

  const updateOrCreateOne = (
    id: number,
    updatedFilm: NewFilm
  ): Film | undefined => {
    const films = parse(jsonDbPath, defaultMovies);
  
    const index = films.findIndex((film) => film.id === id);
  
    if (index === -1) {
      return createOneFilm(updatedFilm);
    }
  
    const film = { ...films[index], ...updatedFilm };
  
    films[index] = film;
    serialize(jsonDbPath, films);
  
    return film;
  };
  
  /*const nextId = () =>
    parse(jsonDbPath, defaultFilms).reduce(
      (maxId, film) => Math.max(maxId, film.id),
      0
    ) + 1;
*/
  export{
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm,
    updateOrCreateOne
  }
  