import Image from "next/image";

interface HeartAnimation {
  src: string;
  width: number;
  height: number;
  style: string;
}

const BackgroundHeart = () => {
  const hearts: HeartAnimation[] = [
    {
      src: "/images/samples/heart/heart_xs.svg",
      width: 25,
      height: 25,
      style: "top-[0px] left-[0px] animated-balloon-3",
    },
    {
      src: "/images/samples/heart/heart_xl.svg",
      width: 85,
      height: 76,
      style: "top-[150px] left-[70px] animated-balloon-7",
    },
    {
      src: "/images/samples/heart/heart_md.svg",
      width: 51,
      height: 46,
      style: "top-[550px] left-[100px] animated-balloon-5",
    },
    {
      src: "/images/samples/heart/heart_sm.svg",
      width: 33,
      height: 30,
      style: "top-[123px] left-[812px] animated-balloon-4",
    },
    {
      src: "/images/samples/heart/heart_lg.svg",
      width: 68,
      height: 61,
      style: "top-[530px] left-[872px] animated-balloon-6",
    },
    {
      src: "/images/samples/heart/heart_2xs.svg",
      width: 17,
      height: 15,
      style: "left-[1000px] animated-balloon-3",
    },
  ];

  return (
    <div className="absolute w-[1225px] top-[234px] left-[50%] -translate-x-[50%] -z-10">
      {hearts.map(({ src, width, height, style }) => (
        <div key={src} className={`inline-block relative ${style}`}>
          <Image src={src} alt={src} width={width} height={height} />
        </div>
      ))}
    </div>
  );
};

export default BackgroundHeart;
