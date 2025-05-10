// SidebarMenu.jsx
import React from 'react';
import { HiOutlineX } from 'react-icons/hi';

const SidebarMenu = ({ isOpen, onClose, children }) => (
  <>
    {/* 오버레이 */}
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    />

    {/* 사이드바 */}
    <div
      className={`
        fixed top-0 left-0 h-full w-1/2 bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-2xl text-gray-700">
          <HiOutlineX />
        </button>
      </div>
      <nav className="px-6 space-y-4">
        {/* 메뉴 아이템 */}
        {children}
      </nav>
    </div>
  </>
);

export default SidebarMenu;
