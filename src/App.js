import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />

        <Route element={<MainLayOut />}>
          <Route path="/home" element={<Home />} />
          <Route path="/createPosts" element={<CreatePost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
