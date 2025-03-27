import { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '68px', // Adjust based on your navbar height
      left: '0',
      width: `${scrollProgress}%`,
      height: '3px',
      backgroundColor: '#ffcf00', 
      zIndex: 1000,
      transition: 'width 0.1s ease-out'
    }} />
  );
};

export default ProgressBar;