import axios from "axios";
import { ThumbnailSelectorProps } from "modalContent/ThumbnailSelector";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { scheduleAnswers } from "@shared/recoil";

const SelectMainImage = () => {
  const [{ thumbnail }, setThumbnail] = useRecoilState(scheduleAnswers);
  const { openModal } = useModal();

  const getImage = async (id: string) => {
    try {
      const image = await axios.get(`https://api.pexels.com/v1/photos/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_IMAGE_API_KEY,
        },
      });
      setThumbnail((prev) => ({ ...prev, thumbnail: image.data.src.large }));
    } catch (error) {
      // TODO: Error handling
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
      id="대표 이미지 설정"
      className="w-[222px] h-[126px] border border-[#E0E0E0] rounded-[5px] mr-[8px] cursor-pointer"
      onClick={handleModal}
    >
      <div className={`${thumbnail ? "" : "py-[32.5px] text-center"}`}>
        <Image
          className="rounded-[4px]"
          src={`${thumbnail ? thumbnail : "/images/samples/camera.svg"}`}
          alt="thumbnail"
          width={thumbnail ? 221 : 30}
          height={thumbnail ? 125 : 30}
        />
        {!thumbnail && (
          <div className="text-[10px] text-[#757575] -tracking-[0.01em]">
            이미지 선택하기
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectMainImage;
