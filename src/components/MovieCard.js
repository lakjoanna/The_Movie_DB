import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import "./MovieCard.css"

const MovieCard = ({ id, poster_path, title, popularity, vote_count}) => {
    const navigate = useNavigate()

    const handleClickCard = useCallback(() => {
      navigate(`/movie/${id}`)
    },[navigate, id])

    return(
      <Card onClick={handleClickCard} data-bs-theme="dark" className='moviecard'>
        <Card.Img variant="top" style={{width: "100%", height:"auto"}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <Card.Body>
          <Card.Title className="text-center pb-1"> {title}</Card.Title>
        </Card.Body>
      </Card>
    )
}

export default MovieCard;