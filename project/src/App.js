import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import MyPage from "./pages/MyPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import BottomNav from "./components/BottomNav.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
    
