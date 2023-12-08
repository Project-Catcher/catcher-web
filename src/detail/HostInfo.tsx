import Tag from "@findSchedule/components/Tag";
import Image from "next/image";
import { useEffect, useRef } from "react";
import InfoBottom from "./InfoBottom";
import InfoMiddle from "./InfoMiddle";
import InfoTop from "./InfoTop";

export interface hostInfo {
  id: number;
  profileImg: string;
  nickName: string;
  introduce: string;
  tags: string[];
  like: number;
  scheduleCount: number;
}

interface hostInfoProps {
  scheduleId: number;
  hostInfo: hostInfo;
  like: number;
  likeStatus: boolean;
  scrap: number;
  scrapStatus: boolean;
  isParticipate: number;
}

const HostInfo = ({
  scheduleId,
  hostInfo,
  like,
  likeStatus,
  scrap,
  scrapStatus,
  isParticipate,
}: hostInfoProps) => {
  const hostMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (hostMenuRef.current) {
        hostMenuRef.current.style.top = `${position}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={hostMenuRef}
      className="inline-block w-1/3 mt-10 h-[150px] transition-all ease-out duration-500 relative"
    >
      <InfoTop />
      <InfoMiddle {...hostInfo} />
      <InfoBottom
        scheduleId={scheduleId}
        like={like}
        likeStatus={likeStatus}
        scrap={scrap}
        scrapStatus={scrapStatus}
        isParticipate={isParticipate}
      />
    </div>
  );
};

export default HostInfo;
