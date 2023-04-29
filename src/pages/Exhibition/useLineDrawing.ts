import Konva from 'konva';
import { useState } from 'react';

const useLineDrawing = () => {
  const [isDraw, setIsDraw] = useState(false);
  const [lines, setLines] = useState<[number, number][]>([]);

  const drawStart = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setIsDraw(true);

    const { x, y } = e.target.getStage()?.getRelativePointerPosition() ?? {
      x: 0,
      y: 0,
    };
    setLines((prev) => [[x, y], ...prev]);
  };

  const drawSquare = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!lines) {
      return;
    }

    if (isDraw) {
      const { x, y } = e.target.getStage()?.getRelativePointerPosition() ?? {
        x: 0,
        y: 0,
      };

      setLines(([, ...prev]) => [[x, y], ...prev]);
    }
  };

  function drawEnd() {
    if (!lines) return;
    setIsDraw(false);
  }

  return {
    onMouseDown: drawStart,
    onMouseMove: drawSquare,
    onMouseUp: drawEnd,
    lines: [{ points: lines.flat() }],
  };
};

export default useLineDrawing;
