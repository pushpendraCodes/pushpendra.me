import { useEffect } from 'react';
import { localBusinessJsonLd } from '../lib/seo';

const Seo = () => {
  useEffect(() => {
    const id = 'one9-jsonld';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(localBusinessJsonLd);
  }, []);

  return null;
};

export default Seo;
