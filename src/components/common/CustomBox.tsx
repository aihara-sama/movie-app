import type { SxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { FunctionComponent } from "react";

interface IProps {
  text: string;
  figure?: JSX.Element;
}

const CustomBox: FunctionComponent<IProps> = ({ text, figure }) => {
  const styles: SxProps<Theme> = {
    border: "1px soldi white",
    borderRadius: 3,
    py: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D71C1C",
  };

  return (
    <Box sx={styles}>
      <Typography fontSize={24} fontStyle={"italic"} textAlign="center">
        {text}
      </Typography>
      {figure && <Box my={10}>{figure}</Box>}
    </Box>
  );
};

export default CustomBox;
