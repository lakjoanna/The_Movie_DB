import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getMovieDetails()
    }, [id])

    const getMovieDetails = useCallback(async () => {
        const url =`https://api.themoviedb.org/3/movie/${id}?api_key=5a2f5760a49bb49f2c0d43b69322efa8`;

        const res = await fetch(url);
        if(!res.ok)
        {
            // handle errors
            return
        }

        const data = await res.json();
        setMovieDetails(data)
    }, [id])

    return <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}></img>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.popularity}</p>
        <p>{movieDetails.vote_count}</p>
        <p>{movieDetails.genres?.map((x) => x.name).join(", ")}</p>
        <p>{movieDetails.production_countries?.map((x) => x.name).join(", ")}</p>
        <p>{movieDetails.overview}</p>
    </div>
}

export default MovieDetailsPage