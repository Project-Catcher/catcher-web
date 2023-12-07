import React, { useEffect, useRef } from "react";

const HostInfo = () => {
  const hostMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (hostMenuRef.current) {
        hostMenuRef.current.style.top = `${position}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={hostMenuRef}
      className="inline-block w-1/3 bg-neutral-50 mt-20 h-[150px] transition-all ease-out duration-500 relative"
    >
      호스트 정보
    </div>
  );
};

export default HostInfo;
