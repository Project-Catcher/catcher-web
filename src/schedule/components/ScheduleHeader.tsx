import { useRouter } from "next/router";

const ScheduleHeader = () => {
  const router = useRouter();

  return (
    <div className="h-[45px] bg-gray-100 rounded-md flex">
      {tabs.map((tab, i) => (
        <div
          key={`tab-${i}`}
          className={`flex items-center justify-center w-48 text-sm rounded-md font-medium text-center text-zinc-500 cursor-pointer ${
            router.asPath === "/schedule/" + tab.path
              ? "bg-white text-zinc-800 font-bold"
              : "text-zinc-400 font-medium hover:bg-gray-200"
          }`}
          onClick={() => router.push(tab.path)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default ScheduleHeader;

const tabs = [
  {
    title: "내 일정",
    path: "/schedule",
  },
  {
    title: "모든 일정",
    path: "/schedule/all",
  },
  {
    title: "모집 일정",
    path: "/schedule/recruitment",
  },
  {
    title: "참여 일정",
    path: "/schedule/participation",
  },
  {
    title: "스크랩",
    path: "/schedule/scrap",
  },
  {
    title: "나만의 아이템",
    path: "/schedule/items",
  },
];
