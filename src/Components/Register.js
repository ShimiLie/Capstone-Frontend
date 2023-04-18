import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex loginform">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Artist Wannabe</h1>
              <h3 className="text-secondary text-center">
                Do not signup if you want to stay in your comfort zone
              </h3>
              <br />
              <div className="col-12">
                <form className="w-100">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont ico font-email"></i>
                    </span>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont ico font-name"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-email"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="m-t-10 text-left d-flex">
                    <div className="forgot password">
                      Have an account?
                      <Link to="/" className="text-right f-w-600 text-inverse">
                        <i className="icofont icofont-lock"></i>Login
                      </Link>
                    </div>
                  </div>
                  <br />
                  <div className="m-t-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                    >
                      Sign Up!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
