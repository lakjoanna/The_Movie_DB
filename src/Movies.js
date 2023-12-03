import React from 'react';

const Movies = ({poster_path,title,popularity,vote_count}) => {
    return(
        <div>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path}></img>
            <h1>{title}</h1>
            <p>{popularity}</p>
            <p>{vote_count}</p>
        </div>
    )
}

export default Movies;