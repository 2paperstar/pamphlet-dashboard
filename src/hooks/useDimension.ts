import { useEffect, useState } from 'react';

const useDimension = (containerEl: React.RefObject<HTMLDivElement>) => {
  const [dimension, setDimension] = useState(() => ({ width: 0, height: 0 }));

  useEffect(() => {
    const resizeHandler = () => {
      const container = containerEl.current;
      if (!container) return;
      setDimension({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [containerEl]);

  return dimension;
};

export default useDimension;
