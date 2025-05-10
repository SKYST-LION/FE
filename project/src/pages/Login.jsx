import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const LoginHeaderAndInputs = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="px-4 pt-4">
      {/* 헤더: 뒤로가기 + 제목 */}
      <div className="flex items-center mb-6">
        <IoIosArrowBack className="text-2xl text-gray-600 cursor-pointer" />
        <h1 className="ml-3 text-2xl font-semibold">로그인</h1>
      </div>

      {/* 이메일 & 비밀번호 입력 폼 */}
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
          </button>
        </div>
                {/* Forgot Password Text */}
        <div className="text-center mt-2">
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Forgot your password?
          </a>
        </div>

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
          <div className="flex justify-center space-x-6 text-gray-500 text-2xl mt-4">
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors mt-6"
          >
            Sign In
          </button>
      </form>
        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Need An Account?{' '}
          <a href="#" className="font-medium text-blue-500 hover:underline">
            Sign Up
          </a>
        </p> 
    </div>
  );
};

export default LoginHeaderAndInputs;
