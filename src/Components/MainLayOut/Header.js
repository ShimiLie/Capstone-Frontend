import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../../assets/icon/image1.JPG";
import { logout } from "../../Redux/User/UserAction";
import { useDispatch } from "react-redux";
import homeIcon from "../../assets/icon/homeIcon.png";
import addPostIcon from "../../assets/icon/addPostIcon.png";
import profileIcon from "../../assets/icon/profileIcon.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header style={{ height: "50px" }}>
      <div className="header_container">
        <div className="branding">
          <Link to="/home">
            <h1 className="brand-logo-header">Uncomfortable Journal</h1>
          </Link>
        </div>
        <div className="iconbar">
          <Link to="/home">
            <img
              style={{ width: "50px" }}
              className="homeIcon"
              src={homeIcon}
              alt="homeIcon"
            ></img>
          </Link>
          <Link to="/createPosts">
            <img
              src={addPostIcon}
              className="addPostIcon"
              alt="createPost"
            ></img>
          </Link>
          <Link to="/profile">
            <img src={profileIcon} className="profileIcon" alt=""></img>
          </Link>
          <button
            className="logoutbtn"
            type="submit"
            onClick={async () => {
              await dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
