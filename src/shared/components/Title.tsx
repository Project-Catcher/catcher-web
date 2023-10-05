interface TitleProps {
  type: "title" | "subTitle";
  value: string;
  extraClass?: string;
}

const Title = ({ type, value, extraClass }: TitleProps) => {
  return <div className={`${type} ${extraClass}`}>{value}</div>;
};

export default Title;
