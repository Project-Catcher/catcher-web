interface SelectBoxProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: string[];
  defaultLabel?: string;
}
/**
 * @param options
 * @returns SelectBox
 * @description 셀렉트 박스
 */
const SelectBox = (props: SelectBoxProps) => {
  return (
    <select
      className={`h-14 w-[300px] px-5 py-4 border border-[#E0E0E0] rounded-[5px] ${props.className}`}
      {...props}
    >
      <option>{props.defaultLabel ?? "선택"}</option>
      {props.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
