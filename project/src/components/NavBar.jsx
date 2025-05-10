// NavBar.jsx
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import logo from '../components/logo.png';

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

    {/* 가운데: 로고 이미지 (flex-1 + flex justify-center 로 정중앙 배치) */}
    <div className="flex-1 flex justify-center">
      <img
        src={logo}
        alt="Logo"
        className="h-6"            /* 원하는 높이(px)로 조절 */
      />
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