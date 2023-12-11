import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MoviesPage from "./pages/MoviesPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import FallbackPage from "./pages/FallbackPage"
import MainLayout from './layouts/MainLayout';

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: MoviesPage
      },
      {
        path: "/movie/:id",
        Component: MovieDetailsPage
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={FallbackPage}
    />
  );
}

export default App;
