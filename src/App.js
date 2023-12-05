import React,{useState, useEffect} from 'react';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import MoviesPage from "./pages/MoviesPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import FallbackPage from "./pages/FallbackPage"

// import SearchButton from './SearchButton';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MoviesPage
  },
  {
    path: "/movie/:id",
    Component: MovieDetailsPage
  }
])

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={FallbackPage}
    />
  );
}

export default App;
