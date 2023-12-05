import {useState, useEffect} from 'react';

import MovieCard from '../components/MovieCard'

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState('');

    useEffect( () => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5a2f5760a49bb49f2c0d43b69322efa8")
        .then((res) => res.json())
        .then(data=>{
          console.log(data)
          setMovies(data.results)
        })
      }, [])
    
      const searchButton = async(e)=>{
        e.preventDefault();
        try{
          const url ='https://api.themoviedb.org/3/search/movie?api_key=5a2f5760a49bb49f2c0d43b69322efa8&query=${searchMovies}';
          const res = await fetch(url);
          const data = await res.json();
          console.log(data)
          setMovies(data.results)
        }
        catch(e){
          console.log(e)
        }
      }
      
      const chandleClick=(e)=>{
        setSearchMovies(e.target.value)
      }

    return <div>
    <form className="w-85 text-end" onSubmit={searchButton}>
      <input type="text" className="border"  placeholder="Search movie" value={searchMovies} onChange={chandleClick}/>
    </form>
    {
        movies.map((movie, index) =>
            <MovieCard key={index} {...movie}/>
        )
    }
</div>
}

export default MoviesPage