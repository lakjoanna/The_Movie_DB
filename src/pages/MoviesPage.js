import {useState, useEffect, useCallback} from 'react';
import MovieCard from '../components/MovieCard'

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchMoviesText, setSearchMoviesText] = useState('');

    useEffect( () => {
        getMovies()
    }, [])

    const getMovies = useCallback(async () => {
        const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5a2f5760a49bb49f2c0d43b69322efa8"
        const res = await fetch(url)
        if(!res.ok)
        {
            return
        }

        const data = await res.json()
        setMovies(data.results)
    }, [setMovies])

    const getMoviesSearch = useCallback(async (text) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5a2f5760a49bb49f2c0d43b69322efa8&query=${text}`;
        const res = await fetch(url);
        if(!res.ok)
        {
            return
        }

        const data = await res.json();
        setMovies(data.results)
    }, [searchMoviesText, setMovies])
      
    const handleInputSearchMovie = useCallback(async (e) => {
        const text = e.target.value

        if(text)
        {
            await getMoviesSearch(text)
        }
        else
        {
            await getMovies()
        }
    }, [])

    return <div>
        <input type="text"
            name=""
            className="border"
            placeholder="Search movie" 
            value={searchMoviesText}
            onInput={handleInputSearchMovie}
            onChange={(e) => setSearchMoviesText(e.target.value)}
        />
        {
            movies.map((movie, index) =>
                <MovieCard key={index} {...movie}/>
            )
        }
    </div>
}

export default MoviesPage