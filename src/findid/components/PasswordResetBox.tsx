interface PasswordResetBoxProps {
  title: string;
  subTitle: string[];
  isDisc?: boolean;
}

const PasswordResetBox = ({
  title,
  subTitle,
  isDisc,
}: PasswordResetBoxProps) => {
  return (
    <>
      <div className="text-xl">{title}</div>
      <ul
        className={`${
          isDisc ? "list-disc list-inside ml-2 " : ""
        }text-[#8D8D8D] my-2`}
      >
        {subTitle.map((_subTitle) => (
          <li key={_subTitle}>{_subTitle}</li>
        ))}
      </ul>
    </>
  );
};

export default PasswordResetBox;
