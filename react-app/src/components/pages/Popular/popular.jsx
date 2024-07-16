import { useState, useEffect, useContext } from "react";
import "./popular.css";
import { bringPopularMovies } from "../../../services/api-calls";
import MovieDetails from "../../movie-details/movie-details";
import { myContext } from "../../../app/context";
import { Container, Row, Col } from "react-bootstrap";

function Popular() {
  const [movies, setMovies] = useState([]);
  const { state, SetAuth } = useContext(myContext);

  useEffect(() => {
    if (movies.length === 0) {
      const getMovies = async () => {
        bringPopularMovies()
          .then((res) => {
            setMovies(res.results);
          })
          .catch((error) => console.log(error));
      };
      setTimeout(() => {
        getMovies();
      }, 1000);
    }
    console.log(movies);
  }, [movies]);

  return (
    <div className="popular-design">
      {movies.length > 0 ? (
        //I have got the movies
        <Container>
          <Row>
            {movies.map((movie) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={movie.id}>
                  <div onClick={() => selectMovie(movie)}>
                    <MovieDetails movie={movie} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <div>LOADING.......</div>
      )}
    </div>
  );
}

export default Popular;
