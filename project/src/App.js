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


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/sidebarmenu" element={<SidebarMenu />} />
        <Route path="/registerpage" element={<PerformanceRegisterPage />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
    
