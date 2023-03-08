import { Box } from "@mui/material";
import type { FunctionComponent } from "react";

interface IProps {
  color: string;
}

const Square: FunctionComponent<IProps> = ({ color }) => {
  return (
    <Box
      width="30px"
      height="30px"
      sx={{
        border: "3px solid white",
        backgroundColor: color,
        borderRadius: 2,
      }}
    ></Box>
  );
};

export default Square;
