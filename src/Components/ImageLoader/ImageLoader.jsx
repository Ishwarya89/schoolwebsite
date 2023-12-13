import React, { useState, useEffect } from 'react';


const ImageLoader = ({ blurredSrc, actualSrc, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Blurred image */}
      {!imageLoaded && (
        <img
          src={blurredSrc}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(10px)', // Adjust the blur amount as needed
          }}
        />
      )}

      {/* Original image */}
      {imageLoaded && (
        <img
          src={actualSrc}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
         
        />
        
      )}
    
    </div>
  );
};

export default ImageLoader;
