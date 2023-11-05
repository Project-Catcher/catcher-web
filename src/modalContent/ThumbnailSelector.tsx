import axios from "axios";
import { isUndefined } from "lodash";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";

const IMAGE_ORIENTATION = "portrait"; // "landscape", "portrait", "square"
const IMAGE_DEFAULT_WIDTH = {
  landscape: 1200,
  portrait: 800,
  square: 800,
};
const IMAGE_DEFAULT_HEIGHT = {
  landscape: 627,
  portrait: 1200,
  square: 800,
};

export interface ThumbnailSelectorProps {
  okCallback: (url: string) => void;
}

const ThumbnailSelector = (props: ThumbnailSelectorProps) => {
  const [searchKeyword, setSearchKeyword] = useState<string>("dog");
  const [images, setImages] = useState<ImageResponse["photos"]>([]);
  const [selectedImageId, setSelectedImageId] = useState<string>();
  const IMAGE_API_HEADER = {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_IMAGE_API_KEY ?? "",
    },
  };

  useEffect(() => {
    getCuratedImages();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSelectImage = (e: MouseEvent) => {
    const target = e.target as HTMLImageElement;
    setSelectedImageId(target.id);
  };

  const handleSubmit = () => {
    selectedImageId && props?.okCallback(selectedImageId);
  };

  const handleSearch = async () => {
    const result = await axios.get<ImageResponse>(
      `https://api.pexels.com/v1/search`,
      {
        params: {
          query: searchKeyword,
          orientation: IMAGE_ORIENTATION,
          locale: "ko-KR",
        },
        ...IMAGE_API_HEADER,
      },
    );
    setImages(result?.data.photos ?? []);
  };

  const getCuratedImages = async () => {
    const result = await axios.get<ImageResponse>(
      `https://api.pexels.com/v1/curated`,
      IMAGE_API_HEADER,
    );
    setImages(result?.data.photos ?? []);
  };

  return (
    <div className="p-1">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold text-gray-800">썸네일 선택</h1>
        <button
          onClick={handleSubmit}
          className="w-20 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          완료
        </button>
      </div>
      <div className="flex items-center w-full space-x-2 justify-evenly">
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div
        onClick={handleSelectImage}
        className="mt-5 
      overflow-y-auto h-[400px]"
      >
        <div className="grid grid-cols-3 gap-2">
          {images?.map((image, index) => {
            const { src } = image;
            const ImageParams = new URLSearchParams(src[IMAGE_ORIENTATION]);
            const selectCondition =
              selectedImageId === image.id.toString() ||
              (isUndefined(selectedImageId) && index === 0);
            return (
              <div
                key={image.id}
                className={`w-[110px] inline-block border-black border-2 rounded-xl overflow-hidden shadow-lg ${
                  selectCondition && "border-blue-500"
                }`}
              >
                <Image
                  id={image.id.toString()}
                  src={image.src[IMAGE_ORIENTATION]}
                  alt={image.alt}
                  key={image.id}
                  height={
                    ImageParams.get("h") ??
                    IMAGE_DEFAULT_HEIGHT[IMAGE_ORIENTATION]
                  }
                  width={
                    ImageParams.get("w") ??
                    IMAGE_DEFAULT_WIDTH[IMAGE_ORIENTATION]
                  }
                  placeholder="empty"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface ImageResponse {
  photos: Photo[];
  page: number;
  per_page: number;
  total_results: number;
  prev_page?: string;
  next_page?: string;
}
interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  alt: string;
  src: {
    original: string;
    large: string;
    large2x: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

export default ThumbnailSelector;
