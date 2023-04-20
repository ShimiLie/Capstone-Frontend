import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { register } from "../Redux/Auth/AuthAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//validation
let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const { isLoading, isError, isRegisterSuccess, message } = authState;

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(register(values));
    },
  });

  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success(message);
      navigate("/"); //to login
    } else {
      navigate("/register");
      console.log("Email might have already been");
    }
  }, [navigate, isRegisterSuccess]);

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
              <ToastContainer />
              <div className="col-12">
                <form className="w-100" onSubmit={formik.handleSubmit}>
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
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
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
                      value={formik.values.name}
                      onChange={formik.handleChange("name")}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-password"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
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
