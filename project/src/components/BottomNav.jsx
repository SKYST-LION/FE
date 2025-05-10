import { useLocation, useNavigate } from "react-router-dom";
import {
  MdOutlineChatBubbleOutline,
  MdSearch,
  MdHome,
  MdSchedule,
  MdPersonOutline,
} from "react-icons/md";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: "/chat", icon: <MdOutlineChatBubbleOutline />, label: "chat" },
    { path: "/search", icon: <MdSearch />, label: "search" },
    { path: "/", icon: <MdHome />, label: "home" },
    { path: "/schedule", icon: <MdSchedule />, label: "schedule" },
    { path: "/mypage", icon: <MdPersonOutline />, label: "mypage" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-t py-2 z-50">
      <div className="max-w-md mx-auto flex justify-around text-2xl">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <div
              key={tab.label}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center cursor-pointer ${
                isActive ? "text-blue-500" : "text-gray-400 hover:text-blue-500"
              }`}
            >
              {tab.icon}
              {isActive && <span className="w-6 h-0.5 bg-blue-500 mt-1"></span>}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
