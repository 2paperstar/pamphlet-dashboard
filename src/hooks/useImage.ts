import { useEffect, useState } from 'react';

const useImage = (src: string) => {
  const [image, setImage] = useState<HTMLImageElement>();

  useEffect(() => {
    const imageEl = new Image();
    imageEl.src = src;
    imageEl.onload = () => setImage(imageEl);
  }, [src]);

  return image;
};

export default useImage;
