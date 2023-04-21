import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const postData = async () => {
    const data = new FormData();
    await data.append("file", image);
    await data.append("upload_preset", "capstone");
    await data.append("cloud_name", "dcx4xkk9f");
    await fetch(`https://api.cloudinary.com/v1_1/dcx4xkk9f/image/upload`, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
      });
  };

  return (
    <div className="postcontainer">
      <div className="row postform">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block">
            <div className="login-card card-block ">
              <div className="authbox">
                <div className="col-12">
                  <h1 className=" text-center">Save your new drawing!</h1>
                  <br />

                  {/* <div className="input-group">
                    <input
                      type="text"
                      placeholder="Title"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div> */}
                  {/* <div className="input-group">
                    <input
                      type="text"
                      placeholder="Description"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={body}
                      onChange={(e) => {
                        setBody(e.target.value);
                      }}
                    />
                  </div> */}
                  <div className="file-field input-field">
                    <input
                      type="file"
                      className="form-control"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>

                  <br />
                  <div className="m-t-20">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={postData}
                    >
                      Submit your new drawing!!
                    </button>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
