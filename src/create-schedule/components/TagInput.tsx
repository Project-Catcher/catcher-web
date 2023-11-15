import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { scheduleAnswers } from "@shared/recoil";
import { checkTagDuplication } from "@shared/utils";

interface TagInputProps {
  tag: string[];
}

const TagInput = ({ tag }: TagInputProps) => {
  const [input, setInput] = useState("");
  const setAnswer = useSetRecoilState(scheduleAnswers);

  const handleTagFormat = (tag: string) => {
    const formattedTag = tag.replace("#", "");

    return formattedTag.trim();
  };

  const handleTag = () => {
    const formattedTag = handleTagFormat(input);
    const newTag = [...tag];
    try {
      checkTagDuplication(tag, formattedTag);
      newTag.push(formattedTag);

      setAnswer((prev) => ({ ...prev, tag: newTag }));
      setInput("");
    } catch (error) {
      return;
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input !== "" && tag.length < 7) {
      handleTag();
    }
  };

  return (
    <input
      className="w-full h-[55px] text-[#727578] px-[14px] outline-0"
      type="text"
      placeholder="엔터를 누르면 최대 7개까지 태그 입력이 가능합니다."
      value={input}
      onChange={({ target: { value } }) => setInput(value)}
      onKeyUp={handleKeyUp}
    />
  );
};

export default TagInput;
