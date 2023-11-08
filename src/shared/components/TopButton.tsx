import Image from "next/image";

const TopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed flex w-[67px] h-[67px] right-[30px] bottom-[30px] justify-center items-center bg-white rounded-[50%] shadow-[0_2px_6px_0_rgba(0,0,0,0.2)] cursor-pointer"
      onClick={handleScrollTop}
    >
      <Image
        src="/images/samples/topButton.svg"
        alt="topbutton"
        width={24}
        height={24}
      />
    </div>
  );
};

export default TopButton;
