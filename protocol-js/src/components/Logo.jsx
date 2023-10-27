import { useEffect, useState } from 'react';
import Image from 'next/image';
import darkLogo from '../images/logos/lix-logo-white.png';
import lightLogo from '../images/logos/lix-logo.png';

function Logo(props) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(mutationsList => {
      for(let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          console.log("darkMode")
          setDarkMode(document.documentElement.classList.contains('dark'));
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <Image
      src={darkMode ? darkLogo : lightLogo}
      alt="logo"
      width={50}  // Replace with your logo's width
      height={50}  // Replace with your logo's height
      {...props}
    />
  );
}

export { Logo };
