import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
<<<<<<< HEAD
import Login from "./pages/Login.jsx"
=======
import MyPage from "./pages/MyPage.jsx";
>>>>>>> a17481825c47aaf28f22459a484e0be8cd76fd82

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
=======
        <Route path="/mypage" element={<MyPage />} />
>>>>>>> a17481825c47aaf28f22459a484e0be8cd76fd82
      </Routes>
    </Router>
  );
}

export default App;
    
