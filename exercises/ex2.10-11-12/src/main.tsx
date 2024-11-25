
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import CinemaPage from "./components/pages/CinemaPage.tsx";
import MovieListPage from "./components/pages/MovieListPage.tsx";
import AddMoviePage from './components/pages/AddMoviePage.tsx';
import MoviePage from './components/pages/MoviePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinemas",
        element: <CinemaPage />,
      },
      {
        path: "movie-list",
        element: <MovieListPage />,
      },

      {
        path: "add-movie",
        element: <AddMoviePage />,
      },
      {
        path: "movies/:id",
        element: <MoviePage />,
      },


    ],
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
