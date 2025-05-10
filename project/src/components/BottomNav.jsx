import { MdOutlineChatBubbleOutline, MdSearch, MdHome, MdSchedule, MdPersonOutline } from 'react-icons/md';

// Bottom Navigation 컴포넌트 (Home 페이지 하단에 배치)
export const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 w-full bg-white shadow-t py-2">
    <div className="max-w-md mx-auto flex justify-around text-2xl text-gray-500">
      <MdOutlineChatBubbleOutline className="cursor-pointer hover:text-blue-500" />
      <MdSearch className="cursor-pointer hover:text-blue-500" />
      <MdHome className="cursor-pointer hover:text-blue-500" />
      <div className="flex flex-col items-center text-blue-500">
        <MdSchedule className="cursor-pointer" />
        <span className="w-6 h-0.5 bg-blue-500 mt-1"></span>
      </div>
      <MdPersonOutline className="cursor-pointer hover:text-blue-500" />
    </div>
  </nav>
);