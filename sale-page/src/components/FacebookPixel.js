import React, { useEffect } from 'react';

const FacebookPixel = () => {
  useEffect(() => {
    // Create the fbq function
    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    if (!window._fbq) {
      window._fbq = window.fbq;
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
      
      // Create script element
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
    }

    // Initialize the Facebook Pixel
    window.fbq('init', '567918892420888');
    window.fbq('track', 'PageView');
    window.fbq('track', 'ViewContent');

    // Clean up function to remove the script on unmount
    return () => {
      const fbScript = document.querySelector('script[src="https://connect.facebook.net/en_US/fbevents.js"]');
      if (fbScript) {
        fbScript.remove();
      }
    };
  }, []);

  return (
    <noscript>
      <img height="1" width="1" style={{ display: 'none' }}
           src={`https://www.facebook.com/tr?id=567918892420888&ev=PageView&noscript=1`} />
    </noscript>
  );
};

export default FacebookPixel;
