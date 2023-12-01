import React, { useEffect, useState } from "react";
import { getItemList } from "@pages/api/mySchedule";
import ItemContent from "./ItemContent";
import ScheduleTab from "./ScheduleTab";
import TitleSearch from "./TitleSearch";

type TabType = "전체";

export interface ItemCardType {
  theme: string;
  title: string;
  place: string;
  content: string;
}

const Items = () => {
  const [tab, setTab] = useState("전체");
  const [itemList, setItemList] = useState<ItemCardType[]>([]);
  const [title, setTitle] = useState("");

  const onClickTab = (tab: string) => {
    setTab(tab as TabType);
  };

  const onClickSearch = () => {
    getItemList(title).then((res) => setItemList(res.data));
  };

  useEffect(() => {
    try {
      getItemList().then((res) => {
        setItemList(res.data);
      });
    } catch (error) {
      console.error("API 호출 오류", error);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        {/* 일정 탭 */}
        <div className="flex flex-col w-3/5 pt-10">
          <ScheduleTab
            tabTitle="나만의 아이템"
            tabItems={itemsTabItems}
            currentTab={tab}
            onClickTab={onClickTab}
          />
        </div>
      </div>

      <div className="flex flex-col items-center min-h-[640px] bg-slate-100 border-t">
        <TitleSearch
          itemTitle={"아이템 명"}
          itemPlaceholder={"아이템명을 입력해주세요"}
          title={title}
          setTitle={setTitle}
          onClickSearch={onClickSearch}
        />

        <ItemContent itemList={itemList} />
      </div>
    </div>
  );
};

export default Items;

const itemsTabItems: Record<"title", TabType>[] = [{ title: "전체" }];
