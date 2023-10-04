import React from "react";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
  return (
    <>
      <header className="fixed z-100 top-0 left-0 right-0 bg-transparent text-gray-400">
        <div className="border-box w-full max-w-[80%] h-20 px-8 py-6 mx-auto my-0">
          <div className="inline-block text-2xl font-bold leading-8 cursor-pointer">
            <Link href="/">Jinwook's Portfolio</Link>
          </div>
          <div className="inline-block float-right after: border-box before: border-box">
            {["Skills", "Archiving", "Projects"].map((tag) => (
              <div
                key={tag}
                className="inline-block text-base font-bold px-4 leading-8 cursor-pointer"
              >
                <Link href={tag.toLowerCase()}>{tag}</Link>
              </div>
            ))}
          </div>
        </div>
      </header>
      <div>{children}</div>
    </>
  );
};

export default React.memo(NavItem);
