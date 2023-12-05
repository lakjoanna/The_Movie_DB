import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ id, poster_path, title, popularity, vote_count}) => {
    const navigate = useNavigate()

    const handleClickCard = useCallback(() => {
        navigate(`/movie/${id}`)
    },[navigate])

    return(
        <div onClick={handleClickCard}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
            <h1>{title}</h1>
            <p>{popularity}</p>
            <p>{vote_count}</p>
        </div>
    )
}

export default MovieCard;