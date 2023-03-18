import { Grid } from "@mui/material";
import type { FunctionComponent } from "react";
import MovieCard from "./MovieCard";

interface IProps {
  movieList: any[];
}

const MovieList: FunctionComponent<IProps> = ({ movieList }) => {
  return (
    <Grid container spacing={3}>
      {movieList.map((movie, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={4}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
