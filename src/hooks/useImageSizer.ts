import { useEffect, useState } from 'react';

const useImageSizer = (
  image: HTMLImageElement,
  dimension: { width: number; height: number },
) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!image) return;
    const scale = Math.min(
      dimension.width / image.width,
      dimension.height / image.height,
    );
    setScale(scale);
  }, [dimension, image]);

  return {
    scale,
    width: image.width * scale,
    height: image.height * scale,
  };
};

export default useImageSizer;
