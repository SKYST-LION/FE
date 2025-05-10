import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import logo from '../components/logo.png';
import SidebarMenu from '../pages/SidebarMenu';

const NavBar = () => {
  const navigate = useNavigate(); // ✅ useNavigate 훅 사용
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

          {/* 로그인 */}
          <button
            onClick={() => navigate('/login')}
            className="text-[#3160D8] font-bold focus:outline-none"
          >
            로그인
          </button>
        </div>

        
    <SidebarMenu
      isOpen={isSidebarOpen}
      onClose={() => setIsSidebarOpen(false)}
    >
      <a href="/" className="block hover:text-blue-600">Home</a>
      <a href="/mypage" className="block hover:text-blue-600">마이페이지</a>
      <a href="/" className="block hover:text-blue-600">나의 예약</a>
      <a href="/" className="block hover:text-blue-600">공연 등록</a>
      {/* 필요에 따라 메뉴 항목 추가 */}
    </SidebarMenu>

    </nav>


  );
};

export default NavBar;
