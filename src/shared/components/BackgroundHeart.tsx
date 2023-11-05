import Image from "next/image";

interface HeartAnimation {
  src: string;
  width: number;
  height: number;
  position: string;
}

const BackgroundHeart = () => {
  const hearts: HeartAnimation[] = [
    {
      src: "/images/samples/heart/heart_xs.svg",
      width: 25,
      height: 25,
      position: "top-[0px] left-[0px]",
    },
    {
      src: "/images/samples/heart/heart_xl.svg",
      width: 85,
      height: 76,
      position: "top-[150px] left-[70px]",
    },
    {
      src: "/images/samples/heart/heart_md.svg",
      width: 51,
      height: 46,
      position: "top-[550px] left-[100px]",
    },
    {
      src: "/images/samples/heart/heart_sm.svg",
      width: 33,
      height: 30,
      position: "top-[123px] left-[812px]",
    },
    {
      src: "/images/samples/heart/heart_lg.svg",
      width: 68,
      height: 61,
      position: "top-[530px] left-[872px]",
    },
    {
      src: "/images/samples/heart/heart_2xs.svg",
      width: 17,
      height: 15,
      position: "left-[1000px]",
    },
  ];

  return (
    <div className="absolute w-[1225px] top-[234px] left-[50%] -translate-x-[50%]">
      {hearts.map(({ src, width, height, position }) => (
        <div
          key={src}
          className={`inline-block relative animated-balloon ${position}`}
        >
          <Image src={src} alt={src} width={width} height={height} />
        </div>
      ))}
    </div>
  );
};

export default BackgroundHeart;
