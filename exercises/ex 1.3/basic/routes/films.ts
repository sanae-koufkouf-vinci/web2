import { Router } from "express";
import { Film, NewFilm } from "../types";

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
  if (!req.query['minimum-duration']) {
    // Cannot call req.query.budget-max as "-" is an operator
    return res.json(defaultMovies);
  }
  const minDuration= Number(req.query['minimum-duration']);
  const filteredMovies = defaultMovies.filter((film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredMovies);
});

router.get("/", (req, res) => {
  if (!req.query['minimum-duration']) {
    // Cannot call req.query.budget-max as "-" is an operator
    return res.json(defaultMovies);
  }
  const minDuration= Number(req.query['minimum-duration']);
  const filteredMovies = defaultMovies.filter((film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredMovies);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultMovies.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.post("/", (req, res) => {
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
    return res.json(" Wrong body format");
  }

  const newFilm = body as NewFilm;

  const nextId =
    defaultMovies.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) +
    1;

   const addedFilm : Film = { id: nextId, ...newFilm}

  defaultMovies.push(addedFilm);

  return res.json(addedFilm);
});



export default router;