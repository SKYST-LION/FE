import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import axiosInstance from '../api/axiosInstance';

const SignupPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axiosInstance.post('/api/user/signup/', {
        email: form.email,
        nickname: form.nickname,
        password: form.password,
      });
      console.log('회원가입 성공:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패:', error.response?.data || error.message);
      alert('회원가입 실패');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="max-w-md mx-auto bg-white px-6 pt-0 pb-6 rounded-lg shadow">
          {/* 뒤로가기 */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center mb-2 text-gray-700 hover:text-gray-900"
          >
            <IoIosArrowBack className="text-2xl text-gray-600 cursor-pointer" />
          </button>

          {/* 제목 */}
          <h2 className="text-[28px] font-semibold text-[#021C48] mb-12">
            회원가입
          </h2>

          {/* 입력 폼 */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
              required
            />

            {/* Nickname */}
            <input
              name="nickname"
              type="text"
              placeholder="Nickname"
              value={form.nickname}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
                required
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
                name="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3160D8]"
                required
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

            {/* Submit 버튼 */}
            <button
              type="submit"
              className="w-full bg-[#3160D8] text-white py-3 rounded-md text-base font-medium hover:bg-[#274bb1]"
            >
              Create Account
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center justify-center text-gray-400 text-sm mt-6">
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

          {/* 로그인 링크 */}
          <p className="mt-4 text-center text-sm text-gray-600">
            이미 계정이 있으신가요?{' '}
            <Link to="/login" className="font-medium text-gray-600 hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
