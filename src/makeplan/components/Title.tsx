interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div>
      <div className="text-[32px] text-[#3B3C3D] font-bold -tracking-[0.5px]">
        {title}
      </div>
      <div className="text-[#666666] -tracking-[0.5px]">{subTitle}</div>
    </div>
  );
};

export default Title;
