import { Box, Button, CircularProgress } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Image, Layer, Line, Rect, Stage } from 'react-konva';
import useImage from '../../hooks/useImage';
import useImageSizer from '../../hooks/useImageSizer';
import useDimension from '../../hooks/useDimension';
import useSquareDrawing from './useSquareDrawing';
import ModeSelector from './ModeSelector';
import useModeStore from './useModeStore';
import useLineDrawing from './useLineDrawing';
import { useParams } from 'react-router';
import {
  Section,
  updateExhibitionMapSection,
  useMapInExhibitions,
} from '../../api/exhitbition';
import { useSnackbar } from 'notistack';

const CanvasArea: React.FC<{
  image: HTMLImageElement;
  dimension: { width: number; height: number };
  sections: Section[];
  onChangeSections: (sections: Omit<Section, 'id'>[]) => void;
}> = ({ image, dimension, sections: sectionsProp, onChangeSections }) => {
  const { height, scale, width } = useImageSizer(image, dimension);
  const { squares, setSequares, ...sqaureHandler } = useSquareDrawing(
    sectionsProp.reduce((a, curr) => (a > curr.level ? a : curr.level), 0)
  );
  const { lines, ...lineHandler } = useLineDrawing();
  const type = useModeStore((store) => store.type);
  const [selectedBoxId, setSelectedBoxId] = useState(-1);
  const [sections, setSections] = useState(sectionsProp);
  const finalSections = useMemo(
    () => [
      ...sections
        .sort((a, b) => b.level - a.level)
        .map((section) => ({
          key: section.id,
          width: section.block[3],
          height: section.block[2],
          x: section.block[1],
          y: section.block[0],
          level: section.level,
        })),
      ...squares,
    ],
    [sections, squares]
  );

  useEffect(() => {
    onChangeSections(
      finalSections.map((v) => ({
        block: [
          Math.ceil(v.y),
          Math.ceil(v.x),
          Math.ceil(v.height),
          Math.ceil(v.width),
        ],
        level: v.key,
        name: 'section',
      }))
    );
  }, [finalSections, onChangeSections]);

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
        {finalSections.map((section) => (
          <Rect
            {...section}
            stroke="red"
            fill={
              section.key === selectedBoxId
                ? 'rgba(255, 0, 0, 0.2)'
                : 'rgba(0, 0, 0, 0.1)'
            }
            onPointerClick={() => setSelectedBoxId(section.key)}
            onPointerDblClick={() => {
              setSections((prev) => prev.filter((s) => s.id !== section.key));
              setSequares((prev) => prev.filter((s) => s.key !== section.key));
            }}
          />
        ))}
        {lines.map((line, index) => (
          <Line key={index} {...line} stroke="red" />
        ))}
      </Layer>
    </Stage>
  );
};

const Exhibition = () => {
  const { id, mapId } = useParams<{ id: string; mapId: string }>();
  const { data: map } = useMapInExhibitions(Number(id), Number(mapId));
  const containerEl = useRef<HTMLDivElement>(null);
  const image = useImage(`http://localorder.link:3000/image/${map?.image.id}`);
  const dimension = useDimension(containerEl);
  const { enqueueSnackbar } = useSnackbar();

  const [sections, setSections] = useState<Omit<Section, 'id'>[]>([]);

  const handleSave = () => {
    updateExhibitionMapSection(Number(id), Number(mapId), sections).then(() => {
      enqueueSnackbar('저장되었습니다.', { variant: 'success' });
    });
  };

  return (
    <Box flex={1} display="flex" flexDirection="row">
      <Box flex={1} display="flex" flexDirection="column" alignItems="center">
        <Box
          flex={1}
          ref={containerEl}
          display="flex"
          justifyContent="center"
          alignSelf="stretch"
        >
          {image && dimension.width && dimension.height && map ? (
            <CanvasArea
              image={image}
              dimension={dimension}
              sections={map.sections}
              onChangeSections={setSections}
            />
          ) : (
            <CircularProgress />
          )}
        </Box>
        <ModeSelector />
        <Button onClick={handleSave}>저장</Button>
      </Box>
    </Box>
  );
};

export default Exhibition;
