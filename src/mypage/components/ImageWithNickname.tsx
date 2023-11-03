import Image from "next/image";

const ImageWithNickname = () => {
  const handleChangeProfileImage = () => {
    // TODO: select file
  };

  return (
    <div className="mb-[46px]">
      <div className="relative w-[143px] h-[143px] bg-black rounded-[50%] mx-auto">
        <div
          className="absolute right-[5px] bottom-[5px] flex justify-center items-center w-[24px] h-[24px] bg-[#F864A1] border-2 border-white rounded-[50%] cursor-pointer"
          onClick={handleChangeProfileImage}
        >
          <Image
            src="/images/samples/changeProfileImageButton.svg"
            alt="changeImage"
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className="text-[18px] text-[#333333] font-bold text-center">
        명란마요
      </div>
    </div>
  );
};

export default ImageWithNickname;
