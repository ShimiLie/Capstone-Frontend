import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { newPassword } from "../Redux/Auth/AuthAction";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const tokenData = { password, token };

  const authState = useSelector((state) => state.auth);
  const { isError, isPasswordSuccess, message } = authState;

  const updatePassword = async (e) => {
    e.preventDefault();
    await dispatch(newPassword(tokenData));

    if (isPasswordSuccess) {
      toast.success("Updated");
      navigate("/");
    } else if (isError) {
      toast.error("Error");
    }
  };

  return (
    <div className="container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Uncomfortable Journal</h1>
              <br />
              <ToastContainer />
              <div className="col-12">
                <form className="w-100" onSubmit={updatePassword}>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont ico font-email"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="New Password"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
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
                      Update Password
                    </button>
                    <br />
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

export default ResetPassword;
