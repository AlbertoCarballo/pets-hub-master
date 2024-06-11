import React, { useEffect } from 'react';
import '../css/home.css';

function BackgroundImage({ src }) {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${src})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'no-repeat';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.backgroundRepeat = '';
    };
  }, [src]);

  return null;
}

export default BackgroundImage;
