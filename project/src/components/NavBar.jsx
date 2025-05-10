// NavBar.jsx
import React from 'react';
import { HiMenu } from 'react-icons/hi';

const NavBar = () => (
  <nav
    className={`
      flex flex-row items-center justify-between
      bg-white
      pt-[15px] pb-[18px]   /* Figma 세로 패딩 */
      pl-[15px] pr-[18px]   /* Figma 가로 패딩 */
    `}
  >
    {/* 1) 왼쪽 햄버거 메뉴 (고정 너비) */}
    <button className="flex-none focus:outline-none">
      <HiMenu className="w-6 h-6 text-[#3160D8]" />
    </button>

    {/* 2) 가운데: 남는 공간 차지 + 텍스트 중앙 */}
    <div className="flex-1 text-center">
      <span
        className="
          text-[#3160D8]
          text-[15px] leading-normal
          font-inter font-bold
        "
      >
        HOME
      </span>
    </div>

    {/* 3) 오른쪽 로그인 (고정 너비) */}
    <button className="flex-none focus:outline-none">
      <span
        className="
          text-[#3160D8]
          text-[15px] leading-normal
          font-inter font-bold
        "
      >
        로그인
      </span>
    </button>
  </nav>
);

export default NavBar;