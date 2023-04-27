import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";
import CreatePost from "./Components/CreatePost/CreatePost";
import PrivateRoute from "./Utils/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import { useEffect } from "react";
import UserProfile from "./Components/Profile/UserProfile";

function App() {
  //check is user is logged in

  useEffect(() => {
    if (
      localStorage.getItem("token") !== "" &&
      localStorage.getItem("user") !== ""
    ) {
      <Navigate to="/home" />;
    }

    return () => {};
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route element={<PrivateRoute />}>
          <Route element={<MainLayOut />}>
            <Route path="/home" element={<Home />} />
            <Route path="/createPosts" element={<CreatePost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:userid" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
