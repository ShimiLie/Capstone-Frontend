import React from "react";
import image1 from "../assets/icon/image1.JPG";
import { timeSince } from "../Utils/Utils";

const Posts = ({ post, currentUser }) => {
  return (
    <div className="post-list">
      <div className="post">
        <div className="p_d">
          <div className="p_inner">
            {/* <img className="p_p" alt="" src={post.pic} /> */}
            <a href="">
              <p className="p-name">{post.title}</p>
            </a>
          </div>
          <i className="fas fa-ellipsis-h threedots"></i>
        </div>
        <div className="p_image">
          <img className="pp_full" src={post.photo} alt="post" />
        </div>
        <div>
          {/* <p className="p-name">{post.title}</p> */}
          <p className="postbody">{post.body}</p>
        </div>

        <p className="postdate">{timeSince(new Date())} Ago</p>
      </div>
    </div>
  );
};

export default Posts;
