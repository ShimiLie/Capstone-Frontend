import React, { useEffect } from "react";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import { getPosts } from "../Redux/Post/PostAction";
import { useDispatch, useSelector } from "react-redux";
import { getUserfromLocalStorage } from "../Utils/Utils";

const Home = () => {
  const dispatch = useDispatch();

  const postState = useSelector((state) => state.post);
  const { posts, isError, isPostSuccess, message } = postState;
  console.log(postState);

  const currentUser = getUserfromLocalStorage;

  useEffect(() => {
    async function fetchData() {
      await dispatch(getPosts());
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="main-container">
        <div className="inner-container">
          <div className="left-section">
            {posts && posts.length > 0 ? (
              posts.map((post, index) => (
                <Posts key={index} post={post} currentUser={currentUser} />
              ))
            ) : (
              <h2>loading</h2>
            )}
          </div>
          <div className="right-section">
            <Suggestions />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
