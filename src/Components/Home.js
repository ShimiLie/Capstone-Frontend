import React, { useEffect } from "react";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import { getPosts } from "../Redux/Post/PostAction";
import { useDispatch, useSelector } from "react-redux";
import { getUserfromLocalStorage } from "../Utils/Utils";
import justDoIt from "../assets/icon/justDoIt.png";
import { getProfile } from "../Redux/Profile/ProfileAction";

const Home = () => {
  let imageStyle = {
    height: "500px",
    width: "500px",
    backgroundImage:
      "url(https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F2b790e48bcd9779bce4dc5bc74a01118.563x1000x1.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "fixed",
  };
  const dispatch = useDispatch();

  const postState = useSelector((state) => state.post);
  const { posts, isError, isPostSuccess, message } = postState;
  // console.log(postState);

  const profileState = useSelector((state) => state.profile);
  const { profile, isSuccess } = profileState;

  const currentUser = getUserfromLocalStorage;

  useEffect(() => {
    async function fetchData() {
      await dispatch(getProfile());
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="main-container">
        <div className="inner-container">
          <div className="left-section">
            {profile && profile.length > 0 ? (
              profile.map((post, i) => (
                <Posts key={i} post={post} currentUser={currentUser} />
              ))
            ) : (
              <h2 style={{ marginTop: "400px", backgroundColor: "honeydew" }}>
                Start the uncomfortable journey!
              </h2>
            )}
            {/* {profile && profile.length > 0 ? (
              profile.map((item, index) => (
                <div key={index}>
                  <img className="item" src={item.photo} alt={item.title} />
                </div>
              ))
            ) : (
              <h4>No posts yet</h4>
            )} */}
          </div>
          <br />
          <div className="right-section">
            <div className="rightbox">
              <h4>No inspiration??</h4>
              <h2>
                Head over to <a href="https://drawabox.com/">drawAbox</a>!!
              </h2>
              <h1>Pick up that pen and draw!</h1>
              <div class="image" style={imageStyle}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
