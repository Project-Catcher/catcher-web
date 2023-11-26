import axios from "axios";
import { ThumbnailSelectorProps } from "modalContent/ThumbnailSelector";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { scheduleAnswers } from "@shared/recoil";

const SelectMainImage = () => {
  const [{ imageSrc }, setImageSrc] = useRecoilState(scheduleAnswers);
  const { openModal } = useModal();

  const getImage = async (id: string) => {
    try {
      const image = await axios.get(`https://api.pexels.com/v1/photos/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_IMAGE_API_KEY,
        },
      });
      setImageSrc((prev) => ({ ...prev, imageSrc: image.data.src.large }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    openModal<ThumbnailSelectorProps>({
      contentId: "thumbnailSelector",
      isHeaderCloseBtn: true,
      okCallback: (id: string) => {
        getImage(id);
      },
    });
  };

  return (
    <div
      className="w-[222px] h-[126px] border border-[#E0E0E0] rounded-[5px] mr-[8px] cursor-pointer"
      onClick={handleModal}
    >
      <div className={`${imageSrc ? "" : "py-[32.5px] text-center"}`}>
        <Image
          className="rounded-[4px]"
          src={`${imageSrc ? imageSrc : "/images/samples/camera.svg"}`}
          alt="thumbnail"
          width={imageSrc ? 221 : 30}
          height={imageSrc ? 125 : 30}
        />
        {!imageSrc && (
          <div className="text-[10px] text-[#757575] -tracking-[0.01em]">
            이미지 선택하기
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectMainImage;
