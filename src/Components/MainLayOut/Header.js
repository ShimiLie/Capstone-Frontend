import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/icon/image1.JPG";

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
            <svg
              aria-label="New post"
              class="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="50"
              role="img"
              viewBox="0 0 24 24"
              width="50"
            >
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>
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
