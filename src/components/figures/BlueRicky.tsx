import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import Square from "components/common/Square";
import useMoveFigure from "hooks/useMoveFigure";
import type { FunctionComponent } from "react";

interface IProps {
  sx?: SxProps<Theme>;
}

const BlueRicky: FunctionComponent<IProps> = ({ sx }) => {
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
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Square color="#0094FF" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <Square color="#0094FF" />
        <Square color="#0094FF" />
        <Square color="#0094FF" />
      </Box>
    </Box>
  );
};

export default BlueRicky;
