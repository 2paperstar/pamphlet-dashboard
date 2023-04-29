import Konva from 'konva';
import { useState } from 'react';

const useSquareDrawing = () => {
  const [isDraw, setIsDraw] = useState(false);
  const [squares, setSequares] = useState<
    {
      x: number;
      y: number;
      width: number;
      height: number;
    }[]
  >([]);

  const drawStart = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setIsDraw(true);

    setSequares((prev) => [
      {
        ...(e.target.getStage()?.getRelativePointerPosition() ?? {
          x: 0,
          y: 0,
        }),
        width: 0,
        height: 0,
      },
      ...prev,
    ]);
  };

  const drawSquare = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!squares) {
      return;
    }

    if (isDraw) {
      const { x, y } = e.target.getStage()?.getRelativePointerPosition() ?? {
        x: 0,
        y: 0,
      };

      setSequares(([first, ...prev]) => [
        { ...first, width: x - first.x, height: y - first.y },
        ...prev,
      ]);
    }
  };

  function drawEnd() {
    if (!squares) return;
    setIsDraw(false);
  }

  return {
    onMouseDown: drawStart,
    onMouseMove: drawSquare,
    onMouseUp: drawEnd,
    squares,
  };
};

export default useSquareDrawing;
