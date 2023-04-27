import React, { useEffect, useState } from "react";
import "./Profile.css";
import drawing1 from "../../assets/icon/drawing1.jpg";
import { getUserfromLocalStorage } from "../../Utils/Utils";
import { getProfile } from "../../Redux/Profile/ProfileAction";
import { useDispatch, useSelector } from "react-redux";
import ShowEditModal from "../Modals/ShowEditModal";

const Profile = () => {
  const currentUser = getUserfromLocalStorage;
  const dispatch = useDispatch();

  const profileState = useSelector((state) => state.profile);
  const { profile, isSuccess } = profileState;
  // console.log(profileState);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("profile", profile);
      await dispatch(getProfile());
    };
    fetchData();

    return () => {};
  }, []);

  const [showEditmodal, setEditModal] = useState(false);

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "0px auto",
        marginTop: "50px",
        backgroundColor: "honeydew",
        height: "500px",
      }}
    >
      <div style={{ margin: "20px 0px", borderBottom: "1px solid grey" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img
              src={currentUser && currentUser.pic}
              alt="profile"
              width="160px"
              height="160px"
              style={{ borderRadius: "80px" }}
            />
          </div>
          <div>
            <h4>{currentUser && currentUser.name}</h4>
            <h5>{currentUser && currentUser.email}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h6 style={{ fontSize: "20px" }}>
                {profile && profile.length} Posts
              </h6>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setEditModal(true);
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <br />
        <ul className="nav justify-content-center flex-row profileTabBtns">
          <li className="nav-item">
            <button style={{ fontSize: "25px" }}>
              <i className="fa fa-th" aria-hidden="true"></i>
              &nbsp;POST
            </button>
          </li>
        </ul>
      </div>
      <div className="gallery">
        {profile && profile.length > 0 ? (
          profile.map((item, index) => (
            <div key={index}>
              <img className="item" src={item.photo} alt={item.title} />
            </div>
          ))
        ) : (
          <h4>No posts yet</h4>
        )}
      </div>
      <ShowEditModal
        showEditmodal={showEditmodal}
        setEditModal={setEditModal}
      />
    </div>
  );
};

export default Profile;
