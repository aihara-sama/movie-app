import { useEffect, useState } from "react";

const useMoveFigure = () => {
  const [rotate, setRotate] = useState(0);
  const [moveX, setMoveX] = useState(0);

  useEffect(() => {
    const rotateFigure = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setRotate((prev) => prev + 90);
      }
      if (e.key === "ArrowLeft") {
        setMoveX((prev) => prev - 36);
      }
      if (e.key === "ArrowRight") {
        setMoveX((prev) => prev + 36);
      }
      if (e.key === " ") {
        // handle lower figure...
      }
    };

    document.body.addEventListener("keydown", rotateFigure);
    return () => {
      document.body.removeEventListener("keydown", rotateFigure);
    };
  }, []);

  return { rotate, moveX };
};

export default useMoveFigure;
