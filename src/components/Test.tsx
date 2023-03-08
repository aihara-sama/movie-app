import { Box } from "@mui/material";
import type { FunctionComponent } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Test: FunctionComponent<IProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={"100vh"}
      sx={{
        backgroundColor: "#504444",
      }}
    >
      {children}
    </Box>
  );
};

export default Test;
