import React, { useEffect, useState } from "react";
import React_icon from "../assets/react.svg";
import { Link } from "react-router-dom";

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
  const navbarClasses = `${hasShadow ? "shadow-lg shadow-gray-200" : ""}`;
  return (
    <nav
      className={
        "bg-white w-full justify-between h-20 flex items-center sticky top-0 transition duration-300 " +
        navbarClasses
      }
    >
      <Link to="/">
        <img src="/logo.svg" className="m-3 mx-10 h-10" alt="vite" />
      </Link>
      <div className="flex flex-row items-center justify-center gap-20 mx-10">
        <Link to="/">
          <h1 className="text-2xl font-semibold">Home</h1>
        </Link>
        <Link to="/projects">
          <h1 className="text-2xl font-semibold">Projects</h1>
        </Link>
      </div>
    </nav>
  );
}
