interface NoticeTitleProps {
  title: string;
  subTitle: string[];
}

const NoticeTitle = ({ title, subTitle }: NoticeTitleProps) => {
  return (
    <div className="flex items-center py-[24px] tracking-[-0.5px]">
      <div className="inline-block text-[50px] font-bold">{title}</div>
      <div className="inline-block text-[22px] text-[#757575] font-medium pl-[51px]">
        {subTitle.map((_subTitle) => (
          <div key={_subTitle}>{_subTitle}</div>
        ))}
      </div>
    </div>
  );
};

export default NoticeTitle;
