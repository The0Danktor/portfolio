import React, { useEffect, useState } from 'react'
import React_icon from '../assets/react.svg'

export default function NavBar() {
    const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const shouldHaveShadow = scrollTop > 0;
      setHasShadow(shouldHaveShadow);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarClasses = `${hasShadow ? 'shadow-lg shadow-gray-200' : ''}`;
  return (
    <nav className={'bg-white w-full h-20 flex items-center sticky top-0 transition duration-300 ' + navbarClasses}>
        <img src={React_icon} className="m-3 h-10" alt="vite" />
    </nav>
  )
}