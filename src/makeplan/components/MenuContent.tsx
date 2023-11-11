interface MenuContentProps {
  title: string;
  isClicked?: boolean;
}

const MenuContent = ({ title, isClicked }: MenuContentProps) => {
  return (
    <div
      className={`${
        isClicked ? "text-[#F864A1]" : "text-[#333333]"
      } h-1/2 leading-[23px] py-[6px]`}
    >
      {title}
    </div>
  );
};

export default MenuContent;
