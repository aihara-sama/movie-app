import { Box, Button } from "@mui/material";
import type { FunctionComponent } from "react";

interface IProps {
  fetchMovies: (page: number) => void;
  pages: number;
  page: number;
}

const Pagination: FunctionComponent<IProps> = ({
  fetchMovies,
  pages,
  page,
}) => {
  return (
    <Box
      mt={3}
      display={"flex"}
      gap={1}
      justifyContent="center"
      flexDirection={{
        xs: "column",
        md: "row",
      }}
    >
      {new Array(Math.min(pages, 10)).fill(0).map((_, idx) => (
        <Button
          color={page === idx + 1 ? "success" : "primary"}
          onClick={() => fetchMovies(idx + 1)}
          size="small"
          key={idx}
        >
          {idx + 1}
        </Button>
      ))}
    </Box>
  );
};

export default Pagination;
