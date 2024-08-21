import { useEffect, useState } from 'react';

const config: any = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

const defaultSizes = {
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  '2xl': false
};

function useScreen() {
  const [state, setState] = useState({
    width: 0,
    height: 0,
    isMobile: true,
    sizes: {
      xs: true,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      '2xl': false
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const { innerWidth: width, innerHeight: height } = window;
        const newSizes: any = { ...defaultSizes };
        Object.keys(config).forEach((key) => {
          if (config[key] <= innerWidth) {
            newSizes[key] = true;
          } else {
            newSizes[key] = false;
          }
        });
        setState({ sizes: newSizes, width, height, isMobile: !newSizes.md });
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return state;
}

export default useScreen;
