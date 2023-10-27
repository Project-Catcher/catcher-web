import axios from "axios";
import Image from "next/image";
import { FunctionComponent, MouseEvent, useEffect, useState } from "react";

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

interface ThumbnailSelectorProps {}

const ThumbnailSelector: FunctionComponent<ThumbnailSelectorProps> = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("dog");
  const [images, setImages] = useState<ImageResponse["photos"]>([]);
  const [selectedImageId, setSelectedImageId] = useState<string>();

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

  const getCuratedImages = async () => {
    const result = await axios.get<ImageResponse>(
      `https://api.pexels.com/v1/curated`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_IMAGE_API_KEY ?? "",
        },
      },
    );
    setImages(result?.data.photos ?? []);
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
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_IMAGE_API_KEY ?? "",
        },
      },
    );
    setImages(result?.data.photos ?? []);
  };

  const handleSelectImage = (e: MouseEvent) => {
    const target = e.target as HTMLImageElement;
    setSelectedImageId(target.id);
  };

  return (
    <div>
      <h1>image Search</h1>
      <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>검색</button>
      <div onClick={handleSelectImage}>
        {images?.map((image) => {
          const { src } = image;
          const a = new URLSearchParams(src[IMAGE_ORIENTATION]);
          return (
            <span key={image.id}>
              <Image
                id={image.id.toString()}
                src={image.src[IMAGE_ORIENTATION]}
                alt={image.alt}
                key={image.id}
                height={a.get("h") ?? IMAGE_DEFAULT_HEIGHT[IMAGE_ORIENTATION]}
                width={a.get("w") ?? IMAGE_DEFAULT_WIDTH[IMAGE_ORIENTATION]}
                placeholder="empty"
                layout="responsive"
                loading="lazy"
              />
            </span>
          );
        })}
      </div>
      <div>
        {selectedImageId && <div>선택된 이미지 아이디: {selectedImageId}</div>}
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
