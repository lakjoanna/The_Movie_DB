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
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {popularity}
          </Card.Text>
          <Card.Text>
          {vote_count}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default MovieCard;