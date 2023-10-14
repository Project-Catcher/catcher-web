import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navTag: string[] = useMemo(
    () => ["Skills", "Archiving", "Projects", "Schedule"],
    [],
  );

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // handle click outside of modal
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // handle navbar text color by scroll event
    const changeNavbarColor = () => {
      if (window.scrollY >= 95) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav
        className={`fixed z-100 top-0 left-0 right-0 bg-transparent ${
          scrolled ? "text-black" : "text-gray-300"
        } background-white-sm-md`}
        ref={navRef}
      >
        <div className="border-box w-full max-w-[80%] h-20 px-8 py-6 mx-auto my-0">
          <div className="inline-block text-2xl font-bold leading-8 cursor-pointer text-black-sm-md">
            <Link href="/">Jinwook's Portfolio</Link>
          </div>
          <div className="inline-block float-right hidden-sm-md">
            {navTag.map((tag) => (
              <NavItem key={tag} tag={tag} />
            ))}
          </div>
          <div className="float-right hidden inline-block-sm-md">
            <Image
              className="cursor-pointer"
              src="/images/hamburger.svg"
              alt="hamburger"
              width={30}
              height={30}
              onClick={handleToggle}
            />
          </div>
        </div>
        {isOpen && (
          <div className="box-border z-100 w-full max-h-60 bg-white hidden inline-block-sm-md">
            <div className="max-w-[80%] mx-auto pl-8 py-4">
              {navTag.map((tag) => (
                <NavItem key={tag} tag={tag} />
              ))}
            </div>
          </div>
        )}
      </nav>
      <div>{children}</div>
    </>
  );
};

export default React.memo(Navbar);
