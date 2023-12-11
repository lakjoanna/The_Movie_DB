import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

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
            return
        }

        const data = await res.json();
        setMovieDetails(data)
    }, [id])

    return(
          <CardGroup className="p-3">
            <Card  data-bs-theme="dark" className="p-3">
              <Container fluid class="m-3">
                <Row>
                  <Col sm={12} md={6} lg={4} xl={4} xxl={4} >
                    <img style={{width: "100%", height:"auto"}} src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="poster" />
                  </Col>
                  <Col sm={12} md={6} lg={8} xl={8} xxl={8} >
                    <Card.Body className="m-4">
                    <Card.Title className="text-uppercase mb-5 text-center"><h1>{movieDetails.title}</h1></Card.Title>
                    <Card.Text className="mt-4"> <h6>Popularity</h6> {movieDetails.popularity}</Card.Text>
                    <Card.Text className="mt-4"> <h6>Vote count</h6> {movieDetails.vote_count}</Card.Text>
                    <Card.Text className="mt-4"> <h6>Production</h6> {movieDetails.production_countries?.map((x) => x.name).join(", ")}</Card.Text>
                    <Card.Text className="mt-5">  {movieDetails.genres?.map((x) => x.name).join(", ")}</Card.Text>
                    <Card.Text className="mt-5"> <h4>Overview</h4> {movieDetails.overview}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          </CardGroup>
          
      )
}

export default MovieDetailsPage