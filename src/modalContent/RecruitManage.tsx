import { Applicant } from "@schedule/components/ScheduleCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export interface RecruitManageProps {
  scheduleTitle: string;
  applicants: Applicant[];
  participateCapacity: number;
  noCallback: VoidFunction;
}

const RecruitManage = ({
  scheduleTitle,
  applicants: defaultApplicants,
  participateCapacity,
  noCallback,
}: RecruitManageProps) => {
  const [applicants, setApplicants] = useState(defaultApplicants);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState("전체");

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = applicants.map((applicant) => applicant.id);
      setSelectedIds(new Set(allIds));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleSelect = (id: number, isChecked: boolean) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      isChecked ? newSet.add(id) : newSet.delete(id);
      return newSet;
    });
  };

  const isAllSelected =
    applicants.length > 0 &&
    applicants.every((applicant) => selectedIds.has(applicant.id));

  const countTrueStatus = defaultApplicants.reduce((count, applicant) => {
    return applicant.status === true ? count + 1 : count;
  }, 0);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSelectApproval = (selectedList: number[]) => {
    // TODO: 서버에 승인, 승인 취소 요청

    console.log("selectedIds", selectedList);
  };

  useEffect(() => {
    let filteredApplicants;

    if (filter === "승인") {
      filteredApplicants = defaultApplicants.filter(
        (applicant) => applicant.status === true,
      );
    } else if (filter === "대기중") {
      filteredApplicants = defaultApplicants.filter(
        (applicant) => applicant.status === false,
      );
    } else {
      filteredApplicants = defaultApplicants;
    }

    setApplicants(filteredApplicants);
  }, [filter]);

  return (
    <div className="">
      <div className="absolute -top-12" style={{ left: "calc(50% - 55px)" }}>
        <Image
          src="/assets/schedule/pencil.png"
          alt="pencil"
          width={110}
          height={110}
        />
      </div>
      <div className="flex items-center justify-between px-5">
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-lg font-extrabold text-gray-900">
              신청자 관리
            </span>
            <div className="inline-block max-w-[400px] p-1 ml-4 text-xs font-medium text-center text-blue-600 rounded bg-slate-50 truncate-text">
              {scheduleTitle}
            </div>
          </div>
          <span className="text-sm text-gray-500">
            모집정원: {participateCapacity}명 / 승인대기:
            {defaultApplicants.length - countTrueStatus}명 / 승인완료:
            {countTrueStatus}명
          </span>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src="/assets/schedule/filter.svg"
              alt="pencil"
              width={20}
              height={20}
            />
            <span className="ml-1.5 mr-5 text-base font-medium text-zinc-800">
              신청자 상태
            </span>
            <div className="relative w-[110px]">
              <select
                className="block w-full px-3 py-2 bg-white border rounded shadow appearance-none border-zinc-400 hover:border-gray-500 focus:outline-none focus:shadow-outline"
                value={filter}
                onChange={handleChange}
              >
                <option value="전체">전체</option>
                <option value="승인">승인</option>
                <option value="대기중">대기중</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.3 7.7L10 12.4 14.7 7.7 16 9l-6 6-6-6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 max-h-[400px] overflow-y-auto">
        <table className="min-w-full border-b divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="recruit-table-head">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-4 accent-pink-500"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="recruit-table-head w-[50px]">No.</th>
              <th className="recruit-table-head w-[110px]">닉네임</th>
              <th className="recruit-table-head w-[80px]">성별</th>
              <th className="recruit-table-head">신청일시</th>
              <th className="recruit-table-head w-[100px]">상태</th>
              <th className="py-3 text-xs font-medium text-gray-500">
                신청자 정보
              </th>
              <th className="recruit-table-head"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {applicants.map((applicant, i) => (
              <tr key={applicant.id} className="h-[58px]">
                <td className="recruit-table-data">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-4 accent-pink-500"
                    checked={selectedIds.has(applicant.id)}
                    onChange={(e) =>
                      handleSelect(applicant.id, e.target.checked)
                    }
                  />
                </td>
                <td className="recruit-table-data w-[50px]">{i + 1}</td>
                <td className="recruit-table-data">
                  <div className="w-[110px] truncate-text text-zinc-800">
                    {applicant.nickname}
                  </div>
                </td>
                <td className="recruit-table-data w-[80px]">
                  {applicant.gender ?? "-"}
                </td>
                <td className="recruit-table-data">
                  {applicant.applicationDate}
                </td>
                <td className="recruit-table-data">
                  <div
                    className={`pl-2 pr-3 py-0.5 ${
                      applicant.status ? "bg-emerald-50" : "bg-gray-100"
                    } rounded-2xl items-center inline-flex`}
                  >
                    <div className="relative w-2 h-2">
                      <div
                        className={`w-1.5 h-1.5 left-[1px] top-[1px] absolute ${
                          applicant.status ? "bg-emerald-500" : "bg-slate-500"
                        } rounded-full`}
                      />
                    </div>
                    <div
                      className={`ml-2 text-xs font-medium text-center ${
                        applicant.status ? "text-emerald-700" : "text-gray-700"
                      } `}
                    >
                      {applicant.status ? "승인" : "대기 중"}
                    </div>
                  </div>
                </td>
                <td className="py-2 text-[12px] text-center text-gray-900">
                  {/* TODO: 사용자 프로필로 라우팅 */}
                  <button className="px-2 py-1.5  bg-white rounded-[3px] border border-gray-200 text-black font-semibold hover:bg-gray-50">
                    프로필보기
                  </button>
                </td>
                <td className="py-2 text-[12px] text-center text-gray-900 whitespace-nowrap">
                  {/* TODO: 승인, 승인 취소 로직 */}
                  <button
                    className={`text-xs px-2.5 py-1.5 w-[70px] text-white rounded-[3px] border border-gray-200  font-semibold ${
                      applicant.status
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-emerald-500 hover:bg-emerald-600"
                    } `}
                    onClick={() => handleSelectApproval([applicant.id])}
                  >
                    {applicant.status ? "승인 취소" : "승인"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 mr-4 text-right">
        <button
          className="w-[88px] h-[30px] bg-emerald-50 rounded-[5px] border border-emerald-500 text-emerald-500 text-sm"
          onClick={() => handleSelectApproval(Array.from(selectedIds))}
        >
          선택승인
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          className="w-40 h-10 bg-gray-200 rounded text-zinc-400 hover:bg-gray-300"
          onClick={noCallback}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default RecruitManage;
