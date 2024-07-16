import { useState, useEffect, useContext } from "react";
import "./Home.css";
import { bringMovies, searchMovieCriteria } from "../../../services/api-calls";
import MovieDetails from "../../movie-details/movie-details";
import { myContext } from "../../../app/context";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const [movies, setMovies] = useState([]);
  const { state, SetAuth } = useContext(myContext);

  useEffect(() => {
    if (movies.length === 0) {
      const getMovies = async () => {
        bringMovies()
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

  useEffect(() => {
    //The trick here consists in the fact that we are following the state with the useEffect,
    //so every time we change the state we alter the movies data hook, not the state hook.

    if (state !== "") {
      const bringSearchedMovies = async () => {
        searchMovieCriteria(state.auth.search)
          .then((res) => {
            setMovies(res.results);
          })
          .catch((error) => console.log(error));
      };

      bringSearchedMovies();
    }
  }, [state]);

  return (
    <div className="home-design">
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

export default Home;
