import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import {
  PlusIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { RiAnticlockwise2Line } from 'react-icons/ri';


const PerformanceRegisterPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('team');

  const tabs = [
    { key: 'team',     label: '팀소개'    },
    { key: 'photo',    label: '공연사진'  },
    { key: 'schedule', label: '공연일정'  },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* ───────── MAIN ───────── */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto bg-white p-4">
          {/* 제목 */}
          <h1 className="text-2xl font-bold text-[#021C48] mb-4">
            공연 등록
          </h1>

          {/* 탭 */}
          <div className="flex border-b mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex-1 text-center pb-2 text-sm
                  ${
                    activeTab === tab.key
                      ? 'border-b-2 border-black font-semibold text-black'
                      : 'text-gray-400'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 팀소개 탭 내용 */}
          {activeTab === 'team' && (
            <div className="space-y-4">
              {/* 대표 이미지 */}
              <img
                src="/team.jpg"
                alt="Team"
                className="w-full h-auto rounded-lg"
              />

              {/* 소속/팀명 */}
              <div className="px-2">
                <p className="text-sm text-gray-400">연세대학교 밴드부</p>
                <p className="text-lg font-semibold text-[#021C48]">소나기</p>
              </div>

              {/* 액션 리스트 */}
              <div className="divide-y">
                {[
                  { icon: PlusIcon,         label: '공연 설명하기' },
                  { icon: RiAnticlockwise2Line, label: '셀리스트 추가하기' },
                  { icon: CurrencyDollarIcon, label: '티켓 가격 결정하기' },
                  { icon: CreditCardIcon,   label: '결제수단 등록' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="flex items-center justify-between w-full px-4 py-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-800">{item.label}</span>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 공연사진 탭은 아직 비워둠 */}
          {activeTab === 'photo' && <div className="h-40" />}

          {/* 공연일정 탭은 아직 비워둠 */}
          {activeTab === 'schedule' && <div className="h-40" />}
        </div>
      </main>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-white p-4 shadow-t">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => {/* 등록 완료 처리 */}}
            className="w-full bg-[#3160D8] text-white py-3 rounded-md font-medium"
          >
            등록 완료
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PerformanceRegisterPage;