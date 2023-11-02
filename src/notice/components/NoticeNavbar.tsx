import { useState } from "react";

interface NoticeNavbarProps {
  items: string[];
}

const NoticeNavbar = ({ items }: NoticeNavbarProps) => {
  const [clicked, setClicked] = useState("전체");

  const handleClick = (value: string) => {
    setClicked(value);
  };

  return (
    <div className="relative text-[0px] text-[#333333] font-medium mt-[18px] after:content-[''] after:inline-block after:absolute after:w-full after:left-0 after:bottom-0 after:border-b-2 after:border-[#E8E8E8] after:z-[-1]">
      {items.map((item) => (
        <div
          key={item}
          className={`${
            clicked === item ? "font-bold border-b-[3px] border-[#F864A1] " : ""
          }inline-block text-[16px] py-[10px] mr-[37px] cursor-pointer`}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NoticeNavbar;
