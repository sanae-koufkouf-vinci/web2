import { Router } from "express";
import { NewFilm } from "../types";
import{
  createOneFilm,
  deleteOneFilm,
  readAllFilms,
  readOneFilm,
  updateOneFilm, 
  updateOrCreateOne
}from"../services/films"

const router = Router();


router.get("/", (req, res) => {
  const minDuration =
    "minimum-duration" in req.query
      ? Number(req.query["minimum-duration"])
      : undefined;

  if (minDuration !== undefined && (isNaN(minDuration) || minDuration <= 0)) {
    return res.sendStatus(400);
  }

  const filteredFilms = readAllFilms(minDuration);

  return res.send(filteredFilms);
})


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if( isNaN(id)){
    res.sendStatus(400);
  }
  const film = readOneFilm(id);
  if( film === undefined){
    res.sendStatus(404);
  }
  res.send(film);
  
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
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const newFilm = body as NewFilm;

  const addedFilm = createOneFilm(newFilm);

  if (!addedFilm) {
    return res.sendStatus(409);
  }

  return res.json(addedFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const deletedFilm = deleteOneFilm(id);

  if (!deletedFilm) {
    return res.sendStatus(404);
  }

  return res.send(deletedFilm);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }


  const updatedFilm = updateOneFilm(id, body);

  if (!updatedFilm) {
    return res.sendStatus(404);
  }

  return res.send(updatedFilm);
});

router.put("/:id", (req, res) => {
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
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }


  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const createdOrUpdatedFilm = updateOrCreateOne(id, body as NewFilm);

  if (!createdOrUpdatedFilm) {
    return res.sendStatus(409); // Film already exists
  }

  return res.send(createdOrUpdatedFilm);
});


export default router;