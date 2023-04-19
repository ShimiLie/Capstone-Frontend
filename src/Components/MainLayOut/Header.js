import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="branding">
          <Link to="/home" className>
            <h1 className="brand-logo-header">ArtistWannabe</h1>
          </Link>
        </div>
        <div className="iconbar">
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="55"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>
          </Link>
          <Link to="/createPosts">
            <img className="icon_1" alt=""></img>
          </Link>
          <Link to="/profile">
            <img className="icon_1" alt=""></img>{" "}
          </Link>
          <button className="logoutbtn" type="submit">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
