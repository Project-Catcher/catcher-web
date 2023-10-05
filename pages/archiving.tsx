import { Img, Title } from "@shared/components";
import Link from "next/link";

const Archiving = () => {
  return (
    <div className="w-full h-auto bg-zinc-600 mt-20">
      <div className="max-w-[80%] h-fit mx-auto px-10 py-28">
        <div className="subTitleUnderline">
          <Title type="subTitle" value="Archiving" extraClass="text-white" />
        </div>
        <div className="skillsContainer">
          <div className="skillsBox !w-[25rem] my-4">
            <Img src="/images/github.png" />
            <div className="mt-6 mb-6">
              <Link
                className="underline text-sky-400"
                href="https://github.com/Choi-Jinwook"
              >
                Visit Github
              </Link>
            </div>
            <div className="space-y-2">
              <p>
                <b>소스 코드 저장소</b>입니다.
              </p>
              <ul role="list" className="list-disc pl-4 space-y-2">
                <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                <li>코딩 연습을 위한 소스 코드</li>
                <li>수강한 수업들의 코딩 과제 소스 코드</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archiving;
