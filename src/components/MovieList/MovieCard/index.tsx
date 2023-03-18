import LaunchIcon from "@mui/icons-material/Launch";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import type { FunctionComponent } from "react";
// @ts-ignore

interface IProps {
  movie: any;
}

const MovieCard: FunctionComponent<IProps> = ({ movie }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300, backgroundPosition: "initial" }}
        image={`${process.env.REACT_APP_MOVIE_IMAGE_DB_PATH}${movie.poster_path}`}
        title={movie.original_title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.original_title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ mr: 1 }} size="small">
          Rating: {movie.vote_average}/10
        </Button>
        <Link
          target="_blank"
          href={`${process.env.REACT_APP_MOVIE_DB_PATH}/${movie.id}`}
        >
          <Button endIcon={<LaunchIcon />} size="small">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
