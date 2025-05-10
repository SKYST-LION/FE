import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import logo from '../components/logo.png';
import SidebarMenu from '../pages/SidebarMenu';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ useNavigate 훅 사용
  const { isLoggedIn} = useContext(AuthContext);

  return (
      <nav className="bg-white shadow">
        <div className="max-w-md mx-auto flex items-center justify-between px-4 py-3">
          {/* 햄버거 버튼 */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-2xl text-[#3160D8] focus:outline-none"
          >
            <HiOutlineMenu />
          </button>

          {/* 로고 */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16" />
          </Link>

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
      </div>
    </nav>


  );
};

export default NavBar;
