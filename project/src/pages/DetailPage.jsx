// src/pages/DetailPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import LoadingSpinner from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

const DetailPage = () => {
  const { id } = useParams();
  const [performance, setPerformance] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const res = await axiosInstance.get(`/api/performance/${id}`);
        setPerformance(res.data);
      } catch (error) {
        console.error("공연 데이터 로드 실패:", error);
      }
    };
    fetchPerformance();
  }, [id]);

  if (!performance) {
    return <LoadingSpinner />;
  }

  // 구매하기 버튼 클릭 핸들러 (예시)
  const handlePurchase = () => {
    alert("구매 로직을 여기에 연결하세요.");
  };

  const dates = [
    { label: "2025.05.15 오후 6:00", available: true },
    { label: "2025.05.18 오후 6:00", available: false },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-4">
        {/* 1) 섹션 제목 */}
        <div className="flex items-center mb-4">
          <h2 className="text-[28px] font-bold text-[#021C48]">공연 정보</h2>
        </div>

        {/* 2) 메인 이미지 */}
        <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden mb-4">
          <img
            src={
              performance.cover_image || "/placeholder.jpg"
            } /* 실제 이미지 경로로 바꿔주세요 */
            alt={performance.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3) 타이틀 및 평점 */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">
            길거리 공연 웨이팅 1위 보컬 맛집
          </p>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold">{performance.title}</h1>
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium">4.8 (24)</span>
          </div>
        </div>

        {/* 4) 위치 정보 & 버튼 */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">{performance.location}</p>
            <p className="text-sm text-gray-600">5천~1만원대</p>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
            위치보기
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* 5) 공연 날짜보기 섹션 */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">공연 날짜보기</p>
          <div className="space-y-2">
            {dates.map((d, i) => (
              <button
                key={i}
                disabled={!d.available}
                className={`w-full py-3 border rounded-md text-sm font-medium ${
                  d.available
                    ? "border-[#3160D8] text-[#3160D8]"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6) 구매하기 버튼 */}
        <button
          onClick={handlePurchase}
          className="
            w-full
            bg-[#3160D8]
            text-white
            py-3
            rounded-md
            mb-6
            hover:bg-[#274FB5]
            transition-colors
            duration-200
          "
        >
          구매하기
        </button>

        {/* 7) 셋 리스트 */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-800 mb-2">셋 리스트</p>

          {/* 회색 구분선 */}
          <hr className="border-gray-200 mb-4" />

          <div className="max-w-sm mx-auto px-10 divide-y divide-gray-200">
            {(performance.setlist
              ? performance.setlist.split(",").map((s) => s.trim())
              : []
            ).map((song, idx) => (
              <div key={idx} className="flex items-center py-2">
                <span className="text-gray-500">{idx + 1}</span>
                <span className="ml-3 flex-1 text-gray-700">{song}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
