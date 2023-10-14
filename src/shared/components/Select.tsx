interface SelectProps {
  label: string;
  value: number;
  data: number[] | string[];
  onChange: (value: number | string) => void;
}

const Select = ({ label, value, data, onChange }: SelectProps) => {
  return (
    <div>
      <div>{label}</div>
      <select
        onChange={({ target: { value } }) => onChange(value)}
        value={value}
      >
        {data.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
