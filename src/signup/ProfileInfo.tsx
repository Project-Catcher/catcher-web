// 회원가입 - 소개글, 태그 입력 컴포넌트 (프로필 정보)
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, KeyboardEvent } from "react";
import { FormItem } from "./AccountInfo";
import Tag from "./Tag";
import TagInput from "./TagInput";
import TextArea from "./TextArea";

interface FormData {
  [key: string]: { essential: boolean; value: string | string[] };
  profileImg: FormItem;
  introduce: FormItem;
  tags: { essential: boolean; value: string[] };
}

const ProfileInfo = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    // TODO: profileImg -> FileData로 변경
    profileImg: { essential: false, value: "" },
    introduce: { essential: false, value: "" },
    tags: { essential: false, value: [] },
  });
  const [tagInputValue, setTagInputValue] = useState("");

  const initialTag = [
    "여럿이 함께",
    "접근이 쉬움",
    "색다른",
    "인기 있는 장소",
    "친구랑",
    "혼자 즐기는",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {
        ...prevFormData[name],
        value: value,
      },
    }));
  };

  const addTag = () => {
    if (!formData.tags.value.includes(tagInputValue)) {
      setFormData((prevData) => ({
        ...prevData,
        tags: {
          ...prevData.tags,
          value: [...prevData.tags.value, tagInputValue],
        },
      }));
      setTagInputValue("");
    }
  };

  const removeTag = (index: number) => {
    setFormData((prevData) => {
      const newTags = [...prevData.tags.value];
      newTags.splice(index, 1);
      return {
        ...prevData,
        tags: {
          ...prevData.tags,
          value: newTags,
        },
      };
    });
  };

  const handleInputKeyup = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTag();
    }
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInputValue(e.target.value);
  };

  const onClickKeyword = (keyword: string) => {
    if (!formData.tags.value.includes(keyword)) {
      setFormData((prevData) => ({
        ...prevData,
        tags: {
          ...prevData.tags,
          value: [...prevData.tags.value, keyword],
        },
      }));
    }
  };

  const handleFormSubmit = () => {
    console.log("프로필 정보", formData);
    alert("완성");
  };

  return (
    <div>
      <div className="w-[844.67px] h-[988px] bg-white rounded-[40px] shadow flex flex-col p-8">
        <div className="text-black text-[55px] font-medium font-['Poppins']">
          Profile
        </div>
        <div className="text-black text-xl font-normal font-['Poppins']">
          당신은 어떤 사람인가요?
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[142.80px] h-[142.80px] bg-zinc-300 rounded-full flex-center mt-4">
            <Image
              src="/assets/signup/profile-sample.svg"
              alt="profile img"
              width={110}
              height={97}
            />
          </div>

          <div className="mt-2 w-[451px] h-[40px] text-center text-zinc-800 text-lg font-bold">
            {/* TODO: 앞에서 설정한 닉네임? or DB에 저장된 정보 */}
            닉네임
          </div>

          <div className="w-[451px] h-[120px]">
            <TextArea
              label="소개글"
              fieldName="introduce"
              placeholder="나를 자유롭게 소개하는 공간입니다."
              shape="semi-round"
              textAreaStyle="w-full h-[100px] outline-0 py-1 resize-none"
              divStyle="h-full px-[30px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>

          <TagInput
            inputValue={tagInputValue}
            handleInputKeyup={handleInputKeyup}
            handleInputChange={handleTagInputChange}
            onClick={addTag}
          />

          <div className="w-[451px]">
            <div className="w-[202px] h-[22px] text-zinc-800 text-base mb-2">
              이런 키워드는 어떤가요?
            </div>
            <div className="flex flex-wrap w-[451px]">
              <ul id="tags" className="flex flex-wrap p-0 ">
                {initialTag.map((tag, i) => (
                  <li
                    key={`initial tag-${i}`}
                    className=" h-9 bg-sky-100 rounded-[9px] flex-center p-2 m-2 cursor-pointer"
                    onClick={() => onClickKeyword(tag)}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[451px] mt-2">
            <div className="h-[22px] text-zinc-800 text-base mb-2">
              나의 태그
            </div>
            <div className="flex flex-wrap min-h-[60px] w-[451px] bg-zinc-100 bg-opacity-50 rounded-[9px] border border-zinc-400">
              <ul id="tags" className="flex flex-wrap items-center p-0">
                {formData.tags.value.map((tag, i) => (
                  <Tag
                    key={`tag-${i}`}
                    tag={tag}
                    onRemove={() => removeTag(i)}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-2 mt-9">
            <div className="w-[132.72px] h-[45.73px] px-[21.73px] py-[10.86px] bg-amber-300 rounded-lg justify-center items-center gap-[7.24px] inline-flex cursor-pointer">
              <div
                className="text-white text-base font-semibold font-['Raleway'] leading-normal"
                onClick={() => {
                  router.push("/signup/complete");
                }}
              >
                건너뛰기
              </div>
            </div>
            <div className="w-[132.72px] h-[45.73px] px-[21.73px] py-[10.86px] bg-emerald-500 rounded-lg justify-center items-center gap-[7.24px] inline-flex cursor-pointer">
              <div
                className="text-white text-base font-semibold font-['Raleway'] leading-normal"
                onClick={handleFormSubmit}
              >
                완성
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
