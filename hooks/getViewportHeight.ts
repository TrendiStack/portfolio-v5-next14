import { useState, useEffect } from 'react';

export const GetViewportHeight = () => {
  const [mobileHeight, setMobileHeight] = useState<number>(0);

  useEffect(() => {
    setMobileHeight(window.innerHeight);
  }, []);

  return mobileHeight;
};
