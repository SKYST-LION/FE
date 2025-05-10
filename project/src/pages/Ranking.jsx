import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const dummyData = [
  { location: "홍대입구", name: "김민석", rankChange: 50 },
  { location: "신촌", name: "이석원", rankChange: 7 },
  { location: "이태원", name: "케빈", rankChange: null },
  { location: "대학로", name: "한시우", rankChange: 1 },
  { location: "신촌", name: "우태호", rankChange: -5 },
];

const Ranking = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const res = await axiosInstance.get(
          "/api/performance/setlist/?limit=10"
        );
        setChartData(res.data);
      } catch (error) {
        console.error("셋리스트 인기차트 불러오기 실패:", error);
      }
    };
    fetchChart();
  }, []);

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-md mx-auto">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-[#021C48] mb-4">랭킹</h1>

        {/* 테이블 헤더 */}
        <div className="flex items-center text-sm text-gray-500 border-b pb-2 mb-2">
          <div className="w-1/12">i</div>
          <div className="w-4/12 font-medium">아티스트명</div>
          <div className="w-4/12 font-medium">지역</div>
          <div className="w-3/12 font-medium text-right">순위</div>
        </div>

        {/* 리스트 */}
        {dummyData.map((artist, index) => (
          <div key={index} className="flex items-center py-2 border-b text-sm">
            {/* 프로필 아이콘 */}
            <div className="w-1/12">
              <img
                src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                alt="user"
                className="w-6 h-6"
              />
            </div>

            {/* 이름 */}
            <div className="w-4/12 text-[#0253CC] font-medium">
              {artist.name}
            </div>

            {/* 지역명 */}
            <div className="w-4/12 font-medium">{artist.location}</div>

            {/* 순위 변화 */}
            <div className="w-3/12 text-right pr-2">
              {artist.rankChange === null ? (
                <span className="text-gray-400">-</span>
              ) : artist.rankChange > 0 ? (
                <span className="text-blue-500">▲+{artist.rankChange}</span>
              ) : (
                <span className="text-pink-500">▼{artist.rankChange}</span>
              )}
            </div>
          </div>
        ))}

        {/* 셋리스트 인기 차트 */}
        <div className="mt-10 bg-gradient-to-b from-[#d2d9ff] to-[#ffd9f9] p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-bold text-[#021C48] mb-3">셀리스트 인기 차트</h2>
          <ol className="list-decimal ml-5 text-sm text-[#021C48] space-y-1">
            {chartData.map((item, index) => {
              const [title, artist] = item.title.split("_");
              return (
                <li key={index} className="flex justify-between">
                  <div>
                    <span className="font-medium">{title}</span>
                    <span className="text-gray-700"> - {artist}</span>
                  </div>
                  <span className="text-gray-500">{item.count}회</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
