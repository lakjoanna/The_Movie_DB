import React,{useState, useEffect} from 'react';
import Movies from './Movies';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect( () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5a2f5760a49bb49f2c0d43b69322efa8")
    .then((res) => res.json())
    .then(data=>{
      console.log(data)
      setMovies(data.results)
    })
  }, [])

  return (
    <div>
      {movies.map((movieReq) =>
      <Movies key={movieReq.id} {...movieReq}/>)}
    </div>
  );
}

export default App;
