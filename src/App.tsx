import { Container, Typography } from "@mui/material";
import MovieList from "components/MovieList";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import toast from "react-hot-toast";
// @ts-ignore
import theMovieDb from "themoviedb-javascript-library";

theMovieDb.common.api_key = process.env.REACT_APP_MOVIE_DB_API_KEY;

function App() {
  const [movieList, setMovieList] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  const fetchMovies = (nextPage: number = 1) => {
    theMovieDb.genres.getMovies(
      { id: 28, page: nextPage },
      (data: string) => {
        const parsedData = JSON.parse(data);

        setMovieList(parsedData.results);
        setPages(parsedData.total_pages);
        setPage(parsedData.page);
        window.scrollTo(0, 0);
      },
      () => {
        toast.error("Something went wrong!");
      }
    );
  };
  useEffect(fetchMovies, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900&display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <body>
        <Container sx={{ pb: 2 }}>
          <Typography variant="h1" my={5} textAlign="center">
            Popular movies
          </Typography>
          <MovieList movieList={movieList} />
          {pages > 1 && (
            <Pagination pages={pages} page={page} fetchMovies={fetchMovies} />
          )}
        </Container>
      </body>
    </>
  );
}

export default App;
