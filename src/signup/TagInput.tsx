// 입력창에 입력 시, Enter 혹은 버튼으로 작동하는 태그 입력 컴포넌트
import Image from "next/image";
import Input from "./Input";

interface TagInputProps {
  inputValue: string;
  handleInputKeyup: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const TagInput = ({
  inputValue,
  handleInputKeyup,
  handleInputChange,
  onClick,
}: TagInputProps) => {
  return (
    <div className="w-[451px] mt-10 relative">
      <Input
        label="선호 일정"
        inputStyle="w-full h-full outline-0 bg-zinc-100 bg-opacity-50"
        divStyle="h-[57px] px-[30px] mb-[12px] bg-zinc-100 bg-opacity-50"
        type="text"
        fieldName="tag"
        shape="semi-round"
        onKeyUp={handleInputKeyup}
        onChange={handleInputChange}
        value={inputValue}
        placeholder="태그를 입력하세요"
      />

      <span
        className="absolute cursor-pointer top-9 right-4 flex-center"
        onClick={onClick}
        tabIndex={0}
      >
        <Image
          src="/assets/signup/search.svg"
          alt="search"
          width={25}
          height={27}
        />
      </span>
    </div>
  );
};

export default TagInput;
