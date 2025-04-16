
import { useEffect } from 'react';

// Declare fbq as a global function on the window object
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const MetaPixel = () => {
  useEffect(() => {
    // Add Meta Pixel script
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1010016677768248');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Add noscript pixel
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=1010016677768248&ev=PageView&noscript=1';
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    // Track page view on route change
    const trackPageView = () => {
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    // Initial page view
    trackPageView();

    return () => {
      // Cleanup not needed as we want the pixel to persist
    };
  }, []);

  return null; // This component doesn't render anything visibly
};

export default MetaPixel;
