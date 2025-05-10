// SignupPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

const SignupPage = () => {
  const navigate = useNavigate();

  // 비밀번호 가시성 토글 상태
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1) 스크롤 가능한 메인 폼 영역 */}
      <div className="flex-grow">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
          {/* 뒤로가기 */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center mb-2 text-gray-700 hover:text-gray-900"
          >
            <IoIosArrowBack className="text-2xl text-gray-600 cursor-pointer" />
          </button>

          {/* 제목 */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-12">
            회원가입
          </h2>

          {/* 입력 폼 */}
          <form className="space-y-4">
            {/* Email */}
            <input
              type="text"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
            />

            {/* Nickname */}
            <input
              type="text"
              placeholder="Nickname"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </form>

          {/* OR Divider */}
          <div className="flex items-center justify-center text-gray-400 text-sm mt-4">
            <span className="mx-2">OR</span>
          </div>

          {/* Sign In using Divider */}
          <div className="flex items-center justify-center text-gray-400 text-sm mt-2">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2">Sign In using</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login Icons */}
          <div className="flex justify-center space-x-6 text-gray-500 text-2xl mt-4 mb-4">
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
          </div>

          {/* Create Account 버튼 */}
          <button
            onClick={() => {/* TODO: 가입 처리 로직 */ }}
            className="w-full bg-[#3160D8] text-white py-3 rounded-md text-base font-medium hover:bg-[#3160D8]"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
