import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../components/logo.png";
import SidebarMenu from "../pages/SidebarMenu";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ useNavigate 훅 사용
  const { isLoggedIn } = useContext(AuthContext);

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

        {isLoggedIn ? (
          // 🔹 로그인된 상태 → 마이페이지 버튼
          <button
            onClick={() => navigate("/mypage")}
            className="flex items-center gap-2 focus:outline-none"
          >
            <FaUserCircle className="w-6 h-6 text-[#3160D8]" />
          </button>
        ) : (
          // 🔹 로그인 안 된 상태 → 로그인 버튼
          <button
            onClick={() => navigate("/login")}
            className="flex-none focus:outline-none"
          >
            <span className="text-[#3160D8] text-[16px] font-bold">로그인</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
