// DetailPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const DetailPage = () => {
  const navigate = useNavigate();

  // 예시 공연 날짜 데이터
  const dates = [
    { label: '2025.05.15 오후 6:00', available: true },
    { label: '2025.05.18 오후 6:00', available: false },
    { label: '2025.05.18 오후 6:00', available: false },
  ];

  return (
    <div className="min-h-screen bg-white-100">
      <div className="max-w-md mx-auto bg-white p-4">
        {/* 1) 섹션 제목 */}
        <h2 className="text-[28px] font-bold pt-4 -mt-8 mb-8 text-[#021C48]" >공연 정보</h2>

        {/* 2) 메인 이미지 */}
        <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden mb-4">
          <img
            
            alt="Busking"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3) 타이틀 및 평점 */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">
            길거리 공연 웨이팅 1위 보컬 맛집
          </p>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold">K-POP 버스킹</h1>
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium">4.8 (24)</span>
          </div>
        </div>

        {/* 4) 위치 정보 & 버튼 */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">서울, 홍대입구</p>
            <p className="text-sm text-gray-600">5천~1만원대</p>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
            위치보기
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* 5) 공연 날짜보기 섹션 */}
        <div>
          <p className="text-sm font-medium mb-2">공연 날짜보기</p>
          <div className="space-y-2">
            {dates.map((d, i) => (
              <button
                key={i}
                disabled={!d.available}
                className={`w-full py-3 border rounded-md text-sm font-medium ${
                  d.available
                    ? 'border-[#3160D8] text-[#3160D8]'
                    : 'border-gray-300 text-gray-400'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
