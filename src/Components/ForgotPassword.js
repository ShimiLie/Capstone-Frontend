import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import { validEmail } from "../Utils/Utils";
import { resetnewPassword } from "../Redux/Auth/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { isError, isNewPasswordSuccess, message } = authState;

  const ResetPassword = async (e) => {
    e.preventDefault();
    if (validEmail(email)) {
      await dispatch(resetnewPassword(email));

      if (isNewPasswordSuccess) {
        await toast.success("Check your mail!");
        setEmail("");
      } else if (isError) {
        await toast.error("Something went wrong");
      }
    } else {
      toast.error("Invalid Email");
      return;
    }
  };

  return (
    <div className="container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Uncomforatble Journal</h1>
              <br />
              <ToastContainer />
              <div className="col-12">
                <form className="w-100" onSubmit={ResetPassword}>
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
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  {/* <div className="m-t-10 text-left d-flex">
                    <div className="forgot password">
                      <Link
                        to="/forgotpassword"
                        className="text-right f-w-600 text-inverse"
                      >
                        <i className="icofont icofont-lock"></i>Forgot Password?
                      </Link>
                    </div>
                  </div> */}
                  <br />
                  <div className="m-t-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                    >
                      Reset Password
                    </button>
                    <br />
                    Go back to login?
                    <Link to="/" className="w-400px">
                      Login
                    </Link>
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

export default ForgotPassword;
