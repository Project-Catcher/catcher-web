interface TitleProps {
  type: "title" | "subTitle";
  value: string;
}

const Title = ({ type, value }: TitleProps) => {
  return <div className={type}>{value}</div>;
};

export default Title;
