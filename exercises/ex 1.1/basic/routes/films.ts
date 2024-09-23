import { Router } from "express";
import { Film } from "../types";

const router = Router();
const defaultMovies: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160,
      description: "A mind-bending thriller where a thief enters the dreams of others to steal secrets.",
      imageUrl: "https://example.com/inception.jpg",
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      budget: 63,
      description: "A hacker discovers the reality he lives in is a simulated world controlled by machines.",
      imageUrl: "https://example.com/matrix.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      director: "Christopher Nolan",
      duration: 169,
      budget: 86,
      description: "Explorers travel through a wormhole in space to save humanity from extinction.",
      imageUrl: "https://example.com/interstellar.jpg",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      duration: 142,
      budget: 25,
      description: "Two prisoners form a deep bond and find redemption through acts of decency.",
      imageUrl: "https://example.com/shawshank.jpg",
    },
    {
      id: 5,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      budget: 185,
      description: "Batman faces his greatest challenge yet as the Joker wreaks havoc on Gotham City.",
      imageUrl: "https://example.com/darkknight.jpg",
    },
  ];

router.get("/", (_req,res)=>{
    return res.json(defaultMovies);
});



export default router;