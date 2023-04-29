import { Box, CircularProgress } from '@mui/material';
import { useRef } from 'react';
import { Image, Layer, Line, Rect, Stage } from 'react-konva';
import useImage from '../../hooks/useImage';
import useImageSizer from '../../hooks/useImageSizer';
import useDimension from '../../hooks/useDimension';
import useSquareDrawing from './useSquareDrawing';
import ModeSelector from './ModeSelector';
import useModeStore from './useModeStore';
import useLineDrawing from './useLineDrawing';

const imageUrl =
  'https://media.discordapp.net/attachments/1077054339799060551/1101669829003444224/image.png?width=1038&height=1120';

const boxList = [
  { left: 57, top: 147, width: 100, height: 144, text: '트랙4' },
  { left: 412, top: 147, width: 146, height: 144, text: '트랙6' },
  { left: 246, top: 291, width: 168, height: 60, text: '기념품 받는 곳' },
  { left: 159, top: 147, width: 100, height: 144, text: '트랙5' },
  { left: 85, top: 534, width: 70, height: 155, text: '??' },
];

const CanvasArea: React.FC<{
  image: HTMLImageElement;
  dimension: { width: number; height: number };
}> = ({ image, dimension }) => {
  const { height, scale, width } = useImageSizer(image, dimension);
  const { sqaures, ...sqaureHandler } = useSquareDrawing();
  const { lines, ...lineHandler } = useLineDrawing();
  const type = useModeStore((store) => store.type);

  return (
    <Stage
      width={width}
      height={height}
      scale={{ x: scale, y: scale }}
      {...(type === 'square' ? sqaureHandler : {})}
      {...(type === 'line' ? lineHandler : {})}
    >
      <Layer>
        <Image image={image} />
        <Rect
          x={0}
          y={0}
          width={image.width}
          height={image.height}
          stroke="black"
          strokeWidth={4}
        />
        {boxList.map((box) => (
          <Rect
            key={box.text}
            width={box.width}
            height={box.height}
            x={box.left}
            y={box.top}
            stroke="red"
          />
        ))}
        {sqaures.map((sqaure, index) => (
          <Rect key={index} {...sqaure} stroke="red" strokeWidth={3} />
        ))}
        {lines.map((line, index) => (
          <Line key={index} {...line} stroke="red" strokeWidth={3} />
        ))}
      </Layer>
    </Stage>
  );
};

const Exhibition = () => {
  const containerEl = useRef<HTMLDivElement>(null);
  const image = useImage(imageUrl);
  const dimension = useDimension(containerEl);

  return (
    <Box flex={1} display="flex" flexDirection="column" alignItems="center">
      <Box
        flex={1}
        ref={containerEl}
        display="flex"
        justifyContent="center"
        alignSelf="stretch"
      >
        {image ? (
          <CanvasArea image={image} dimension={dimension} />
        ) : (
          <CircularProgress />
        )}
      </Box>
      <ModeSelector />
    </Box>
  );
};

export default Exhibition;
