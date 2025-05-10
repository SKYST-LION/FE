import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import MyPage from "./pages/MyPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import BottomNav from "./components/BottomNav.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SidebarMenu from "./pages/SidebarMenu.jsx"
import PerformanceRegisterPage from "./pages/PerformanceRegisterPage.jsx"
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Ranking from "./pages/Ranking.jsx";

function App() {
  const {isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <LoadingSpinner />; // ✅ 로딩 중엔 이거만 보여줌
  }


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/sidebarmenu" element={<SidebarMenu />} />
        <Route path="/registerpage" element={<PerformanceRegisterPage />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
    
