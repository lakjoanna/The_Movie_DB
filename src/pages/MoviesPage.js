import { useState, useEffect, useCallback } from "react";
import { Navbar, Col, FormControl, Form, Row, Container } from "react-bootstrap";
import MoviesCards from "../components/MoviesCards";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchMoviesText, setSearchMoviesText] = useState('');

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = useCallback(async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5a2f5760a49bb49f2c0d43b69322efa8";
    const res = await fetch(url);
    if (!res.ok) 
    {
      return
    }

    const data = await res.json()
    setMovies(data.results)
  }, [setMovies])

  const getMoviesSearch = useCallback(async (text) => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=5a2f5760a49bb49f2c0d43b69322efa8&query=${text}`;
      const res = await fetch(url);
      if (!res.ok) 
      {
        return
      }

      const data = await res.json();
      setMovies(data.results);
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

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid className="mt-1 mb-1">
          <Navbar.Brand>TMDB Top Rated Movies</Navbar.Brand>
          <Form inline>
            <Row>
              <Col xs="auto">
              <FormControl
                type="search"
                placeholder="Search movie"
                aria-lable="search"
                value={searchMoviesText}
                onInput={handleInputSearchMovie}
                onChange={(e) => setSearchMoviesText(e.target.value)}
                name="" />
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
      <MoviesCards movies={movies}/>
    </>
  );
}

export default MoviesPage;
