import { Router } from "express";
import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const router = Router();
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


router.get("/", (req, res) => {
  const films = parse(jsonDbPath,defaultMovies);
  if (!req.query['minimum-duration']) {
    // Cannot call req.query.budget-max as "-" is an operator
    return res.json(films);
  }
  const minDuration= Number(req.query['minimum-duration']);
  const filteredMovies = films.filter((film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredMovies);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const films = parse(jsonDbPath,defaultMovies);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.post("/", (req, res) => {
  const films = parse(jsonDbPath,defaultMovies);
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <=0)) ||
    ("description" in body &&
        (typeof body.description !== "string" || !body.description.trim() ))||
    ("imageUrl" in body &&
          (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
    ){
      return res.sendStatus(400);
  }
  /*
    for (let film in defaultMovies) {
      if (body.title===film.title || film.director===body.director) {
        return res.sendStatus(400);   
    }
  }*/

  const newFilm = body as NewFilm;

  const nextId =
    films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) +
    1;

   const addedFilm : Film = { id: nextId, ...newFilm}

  films.push(addedFilm);
  serialize(jsonDbPath, films);
  return res.json(addedFilm);
});

router.delete("/:id", (req, res) => {
  const films = parse(jsonDbPath,defaultMovies);
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
  serialize(jsonDbPath, films);
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const films = parse(jsonDbPath,defaultMovies);
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim() ))||
  ("imageUrl" in body &&
        (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))

  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget,description,imageUrl }: Partial<NewFilm> = body;
  // cree pas un nouveau film c'est juste une seule ligne qui equivaut a : const title = body.title
 

  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }
  if (budget) {
    film.budget = budget;
  }
  if (description) {
    film.description = description;
  }
  if (imageUrl) {
    film.imageUrl = imageUrl;
  }
  serialize(jsonDbPath, films);
  return res.json(film);
});

router.put("/:id", (req, res) => {
  const films = parse(jsonDbPath,defaultMovies);
  const body: unknown = req.body;
  const id = Number(req.params.id);

  if (
    !body ||
    typeof body !== "object" ||
    !("title"in body) || !("director" in body) || !("duration" in body) ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim() ))||
  ("imageUrl" in body &&
        (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))

  ) {
    return res.sendStatus(400);
  }

  const film = films.find((film => film.id === id));
  const { title, director, duration, budget,description,imageUrl }= body as NewFilm;

  if(film){
    film.title=title
    film.director=director;
    film.duration=duration
    if (budget) {
      film.budget = budget;
    }
    if (description) {
      film.description = description;
    }
    if (imageUrl) {
      film.imageUrl = imageUrl;
    }
    serialize(jsonDbPath, films);
    return res.json(film);
  
  }else{
     const nouveauFilm : Film = {
      id:id,
      title:title,
      director:director,
      duration:duration,
      budget:budget,
      description:description,
      imageUrl:imageUrl
     }
      
     films.push(nouveauFilm);

     serialize(jsonDbPath, films);
     return res.json(nouveauFilm);

  }


});


export default router;