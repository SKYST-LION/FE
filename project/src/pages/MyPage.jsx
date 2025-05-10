import { useState } from "react";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("scheduled");

  const reservations = {
    scheduled: [
      {
        id: 1,
        artist: "방탄소년단",
        location: "서울, 홍대",
      },
    ],
    completed: [
      {
        id: 2,
        artist: "아이유",
        location: "서울, 강남",
      },
    ],
    cancelled: [
      {
        id: 3,
        artist: "이무진",
        location: "서울, 연남",
      },
    ],
  };

  const currentList = reservations[activeTab];

  return (
    
    <div className="max-w-md mx-auto p-4">
      {/* 탭 메뉴 */}
      <div className="flex justify-around text-sm border-b mb-4">
        {["scheduled", "completed", "cancelled"].map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`
              flex-1
              text-center
              pb-2 
              ${
              activeTab === key
                ? "border-b-2 border-black font-semibold"
                : "text-gray-400"
            }`}
          >
            {key === "scheduled"
              ? "방문 예정"
              : key === "completed"
              ? "방문 완료"
              : "취소"}
          </button>
        ))}
      </div>

      {/* 예약 건수 */}
      <p className="text-sm mb-3 font-medium">총 {currentList.length}건</p>

      {/* 예약 카드 리스트 */}
      {currentList.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-4 flex items-center gap-4 shadow-sm mb-3"
        >
          {/* 썸네일 자리 */}
          <div className="w-[48px] h-[48px] bg-gray-200 rounded-md flex-shrink-0" />

          {/* 텍스트 + 버튼 */}
          <div className="flex flex-col flex-grow">
            <p className="font-semibold text-[15px]">{item.artist}</p>
            <p className="text-sm text-gray-500 mb-2">{item.location}</p>
            {activeTab === "scheduled" && (
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 text-xs border border-gray-400 px-2 py-1 rounded-md">
                  예약 취소
                </button>
                <button className="flex-1 text-xs border border-gray-400 px-2 py-1 rounded-md">
                  예약 확인
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPage;
