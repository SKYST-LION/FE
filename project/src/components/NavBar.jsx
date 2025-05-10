// src/components/NavBar.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../components/logo.png";
import SidebarMenu from "../pages/SidebarMenu";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {/* ───────── NAVBAR ───────── */}
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
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-16" />
            </Link>
          </div>

          {/* 로그인 상태에 따른 버튼 */}
          {isLoggedIn ? (
            <button
              onClick={() => navigate("/mypage")}
              className="flex items-center gap-2 focus:outline-none"
            >
              <FaUserCircle className="w-6 h-6 text-[#3160D8]" />
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex-none focus:outline-none"
            >
              <span className="text-[#3160D8] text-[16px] font-bold">
                로그인
              </span>
            </button>
          )}
        </div>
      </nav>

      {/* ───────── SIDEBAR ───────── */}
      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <Link
          to="/"
          className="block px-6 py-2 hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(false)}
        >
          HOME
        </Link>
        <Link
          to="/mypage"
          className="block px-6 py-2 hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(false)}
        >
          마이페이지
        </Link>
        <Link
          to="/registerpage"
          className="block px-6 py-2 hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(false)}
        >
          공연 등록
        </Link>
      </SidebarMenu>
    </>
  );
};

export default NavBar;
