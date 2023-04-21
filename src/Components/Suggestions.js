import React from "react";
import image1 from "../assets/icon/image1.JPG";

const Suggestions = () => {
  return (
    <>
      <div className="mt-10">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <a href="" className="d-flex align-items-center">
              <img src={image1} alt="avatar" className="big-avatar" />
              &nbsp;
              <div className="m1-1" style={{ transform: "translateY(-2px)" }}>
                <span className="d-block">Leo</span>
              </div>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-8">
          <h6 className="text-secondary suggestionbtn">
            {" "}
            Inspirations for you
          </h6>
          <i className="fa fa-redo" style={{ cursor: "pointer" }}></i>
        </div>
        <div className="inspirations">
          <div className="d-flex jsutify-content-between">
            <div>
              <a href="" className="d-flex align-items-center">
                <img src={image1} className="sug-avatar" alt="avatarsug" />
                &nbsp;
                <div className="m1-1" style={{ transform: "translateY(-2px)" }}>
                  <span className="d-block">KimJungGi</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestions;
