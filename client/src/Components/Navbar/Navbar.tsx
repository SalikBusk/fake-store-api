import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";

const Navbar = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      setIsNavbarVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setIsNavbarVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true});

    return window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className={`top-0 left-0 -translate-y-72 gap-20 w-full z-40 py-4 ${
        isNavbarVisible ? "translate-y-0 bg-transparent" : "bg-primary fixed"
    }`}>
      <Container>
        <nav className="flex flex-row justify-between item-center">
          <Logo />
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
