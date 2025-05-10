import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import logo from '../components/logo.png';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
  const navigate = useNavigate(); // ✅ useNavigate 훅 사용
  const { isLoggedIn} = useContext(AuthContext);

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

      {/* 오른쪽: 로그인 or 마이페이지 */}
      {isLoggedIn ? (
        <button
          onClick={() => navigate("/mypage")}
          className="flex items-center gap-2 focus:outline-none"
        >
          {/* 프로필 아이콘 */}
          <FaUserCircle className="w-[30px] h-[30px] text-[#3160D8]" />
        </button>
      ) : (
        <button
          className="flex-none focus:outline-none"
          onClick={() => navigate("/login")}
        >
          <span className="text-[#3160D8] text-[16px] font-bold">
            로그인
          </span>
        </button>
      )}
    </nav>
  );
};

export default NavBar;
