import Konva from 'konva';
import { useRef, useState } from 'react';

const useSquareDrawing = (highestLevel: number) => {
  const lastId = useRef(999999);
  const level = useRef(highestLevel);
  const [isDraw, setIsDraw] = useState(false);
  const [squares, setSequares] = useState<
    {
      key: number;
      x: number;
      y: number;
      width: number;
      height: number;
      level: number;
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
        key: ++lastId.current,
        level: ++level.current,
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
    setSequares((prev) =>
      prev.filter(({ width, height }) => width > 5 && height > 5)
    );
    setIsDraw(false);
  }

  return {
    onMouseDown: drawStart,
    onMouseMove: drawSquare,
    onMouseUp: drawEnd,
    squares,
    setSequares,
  };
};

export default useSquareDrawing;
