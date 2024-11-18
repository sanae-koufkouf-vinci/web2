
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import CinemaPage from "./components/pages/CinemaPage.tsx";
import MovieListPage from "./components/pages/MovieListPage.tsx";

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
      }

    ],
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
