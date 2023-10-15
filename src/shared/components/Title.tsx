interface TitleProps {
  type?: "title" | "subTitle";
  value: string;
  extraClass?: string;
}

export const Title = ({ type, value, extraClass }: TitleProps) => {
  return <div className={`${type} ${extraClass}`}>{value}</div>;
};

export const ContentTitle = ({ value, extraClass }: TitleProps) => {
  return (
    <div className="subTitleUnderline">
      <div className={`subTitle ${extraClass}`}>{value}</div>
    </div>
  );
};
