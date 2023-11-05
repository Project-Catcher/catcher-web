import Image from "next/image";

const LoginBackground = () => {
  return (
    <div className="absolute w-full h-full">
      <div className="inline-block relative w-1/2 h-screen bg-[linear-gradient(180deg,_#F970A6_0%,_#FFE1D7_73.1%,_#FFFDFD_100%)] -z-10"></div>
      <div className="inline-block relative w-1/2 h-screen bg-[#FFF9FC] -z-10"></div>
      <div className="absolute top-[50%] left-[10%] -z-[5]">
        <Image
          src="/images/samples/Saly-3.svg"
          alt="saly3"
          width={335}
          height={319}
        />
        <hr className="relative w-[500px] border-[#4D4D4D] -top-[25px] -z-[5]" />
      </div>
      <div className="absolute top-[20%] right-[5%] -z-[5]">
        <Image
          src="/images/samples/Saly-2.svg"
          alt="saly2"
          priority
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default LoginBackground;
