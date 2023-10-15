import {
  Container,
  ContentContainer,
  ContentTitle,
  Img,
  WhiteBox,
} from "@shared/components";
import Link from "next/link";

const Archiving = () => {
  return (
    <Container backgroundOption="bg-zinc-600 mt-20">
      <ContentContainer>
        <ContentTitle value="Archiving" extraClass="text-white" />
        <div className="whiteboxContainer">
          <WhiteBox extraClass="!w-[25rem]">
            <Img src="/images/github.png" />
            <div className="mt-6 mb-6">
              <Link legacyBehavior href="https://github.com/Choi-Jinwook">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-400"
                >
                  Visit Github(Open in a new tab)
                </a>
              </Link>
            </div>
            <div className="space-y-2">
              <p>
                <b>소스 코드 저장소</b>입니다.
              </p>
              <ul role="list" className="list-disc pl-4 space-y-2">
                <li>코딩 연습을 위한 소스 코드</li>
                <li>수강한 수업들의 코딩 과제 소스 코드</li>
                <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
              </ul>
            </div>
          </WhiteBox>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Archiving;
