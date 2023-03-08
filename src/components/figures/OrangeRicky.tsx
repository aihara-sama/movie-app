import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import Square from "components/common/Square";
import useMoveFigure from "hooks/useMoveFigure";
import type { FunctionComponent } from "react";

interface IProps {
  sx?: SxProps<Theme>;
}

const OrangeRicky: FunctionComponent<IProps> = ({ sx }) => {
  const figureProps = useMoveFigure();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
        transform: `rotate(${figureProps.rotate}deg) translateX(${figureProps.moveX}px)`,
        transformOrigin: `calc(50% + ${figureProps.moveX}px) calc(50%)`,
        ...sx,
      }}
    >
      <Box>
        <Square color="#DEFF14" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <Square color="#DEFF14" />
        <Square color="#DEFF14" />
        <Square color="#DEFF14" />
      </Box>
    </Box>
  );
};

export default OrangeRicky;
