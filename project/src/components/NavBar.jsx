import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import logo from '../components/logo.png';

const NavBar = () => {
  const navigate = useNavigate(); // ✅ useNavigate 훅 사용

  return (
    <nav
      className={`
        flex flex-row items-center justify-between
        bg-white
        pt-[15px] pb-[18px]
        pl-[15px] pr-[18px]
      `}
    >
      {/* 왼쪽: 햄버거 메뉴 */}
      <button className="flex-none focus:outline-none">
        <HiMenu className="w-8 h-8 text-[#3160D8]" />
      </button>

      {/* 가운데: 로고 */}
      <div className="flex-1 flex justify-center">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-16" />
        </Link>
      </div>

      {/* 오른쪽: 로그인 버튼 */}
      <button
        className="flex-none focus:outline-none"
        onClick={() => navigate("/login")} // ✅ 로그인 클릭 시 /login으로 이동
      >
        <span
          className="
            text-[#3160D8]
            text-[16px] leading-normal
            font-inter font-bold
          "
        >
          로그인
        </span>
      </button>
    </nav>
  );
};

export default NavBar;
