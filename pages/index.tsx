import {
  Container,
  ContentContainer,
  ContentTitle,
  Title,
} from "@shared/components";
import { NextPage } from "next";
import { useMemo } from "react";

const Home: NextPage = () => {
  const about = useMemo(
    () => [
      { label: "이름", value: "최진욱" },
      { label: "생년월일", value: "1998.08.21" },
      { label: "주소지", value: "서울특별시 영등포구" },
      { label: "연락처", value: "010-1234-5678" },
      { label: "이메일", value: "jinwook.fe@gmail.com" },
      { label: "학력", value: "성균관대학교(소프트웨어학과 복수전공)" },
    ],
    [],
  );

  return (
    <>
      <Container backgroundOption="bg-fe bg-cover bg-no-repeat -z-1">
        <ContentContainer>
          <div className="text-center">
            <div className="break-keep text-white">
              <Title type="title" value="최진욱" />
              <br />
              <Title type="subTitle" value="FE Developer" />
              <hr className="w-12 mx-auto my-6 border-gray-400 border-t-2" />
            </div>
            <div className="text-2xl text-gray-300">
              <p className="mb-2">안녕하세요!</p>
              <p className="mb-2">
                늘 고민하고 성장하는 프론트엔드 개발자입니다.
              </p>
              <p>사용자의 경험을 0순위로 생각하며 개발합니다.</p>
            </div>
          </div>
        </ContentContainer>
      </Container>
      <ContentContainer layout="px-12 py-20">
        <ContentTitle value="ABOUT ME" />
        <div className="flex flex-row flex-wrap justify-between">
          {about.map(({ label, value }) => (
            <div key={label} className="w-1/3 mb-6 sm:w-full md:w-1/2">
              <div className="flex flex-col justify-start">
                <div className="text-xl font-bold mb-2">{label}</div>
                <div className="">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
