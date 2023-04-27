import React from "react";
import drawing1 from "../../assets/icon/drawing1.jpg";

const UserProfile = () => {
  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "0px auto",
        marginTop: "50px",
        backgroundColor: "plum",
      }}
    >
      <div style={{ margin: "20px 0px", borderBottom: "1px solid grey" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img
              src=""
              alt="profile"
              width="160px"
              height="160px"
              style={{ borderRadius: "80px" }}
            />
          </div>
          <div>
            <h4>Ant</h4>
            <h5>test@gmail.com</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h6>4 posts</h6>
            </div>
            <button className="btn btn-secondary">Edit Profile</button>
          </div>
        </div>
        <br />
        <ul className="nav justify-content-center flex-row profileTabBtns">
          <li className="nav-item">
            <button>
              <i className="fa fa-th" aria-hidden="true"></i>&nbsp;POST
            </button>
          </li>
        </ul>
      </div>
      <div className="gallery">
        <div>
          <img className="item" alt="gallery" src={drawing1}></img>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
