// NavBar.jsx
import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-black px-4 py-3">
      {/* 왼쪽: 햄버거 메뉴 */}
      <button className="focus:outline-none">
        
      </button>

      {/* 가운데: Apple 로고 + Music 텍스트 */}
      <div className="flex items-center space-x-1">
        
        <span className="text-white text-lg font-semibold">Skyst</span>
      </div>

      {/* 오른쪽: 사용자 프로필 아이콘 */}
      <button className="focus:outline-none">
      
      </button>
    </nav>
  );
};

export default NavBar;