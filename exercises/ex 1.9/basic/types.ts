interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

type NewFilm = Omit<Film, "id">;

interface Text {
  id: string;
  content: string;
  level: "easy" | "medium" | "hard";
}

type NewText = Omit<Text, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Film, NewFilm, Text, NewText };
