import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const renderNavItems = (tag: string) => {
    return (
      <div
        key={tag}
        className="inline-block font-bold px-4 leading-8 cursor-pointer hover:text-black navItem-sm-md"
      >
        <Link href={tag.toLowerCase()}>{tag}</Link>
      </div>
    );
  };

  return (
    <>
      <header
        id="header"
        className="fixed z-100 top-0 left-0 right-0 bg-transparent text-gray-300 background-white-sm-md"
        ref={navRef}
      >
        <div className="border-box w-full max-w-[80%] h-20 px-8 py-6 mx-auto my-0">
          <div className="inline-block text-2xl font-bold leading-8 cursor-pointer text-black-sm-md">
            <Link href="/">Jinwook's Portfolio</Link>
          </div>
          <div className="inline-block float-right hidden-sm-md">
            {["Skills", "Archiving", "Projects"].map((tag) => {
              return renderNavItems(tag);
            })}
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
              {["Skills", "Archiving", "Projects"].map((tag) => {
                return renderNavItems(tag);
              })}
            </div>
          </div>
        )}
      </header>
      <div>{children}</div>
    </>
  );
};

export default React.memo(NavItem);
