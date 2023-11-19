import { defaultItems } from "@schedule/const";
import React, { useState } from "react";
import ItemContent from "./ItemContent";
import ScheduleTab from "./ScheduleTab";
import TitleSearch from "./TitleSearch";

type TabType = "전체";

export interface ItemCardType {
  theme: string;
  name: string;
  place: string;
  content: string;
}

const Items = () => {
  const [tab, setTab] = useState("전체");
  const [itemList, setItemList] = useState<ItemCardType[]>(defaultItems);
  const [title, setTitle] = useState("");

  const onClickTab = (tab: string) => {
    setTab(tab as TabType);
  };

  const onClickSearch = () => {
    const searchData = {
      title: title,
    };

    console.log("searchData", searchData);
    // TODO: API 요청 추가 ??? 아님 프론트에서 다시 필터 ??? <- 확인해야 함
  };

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
