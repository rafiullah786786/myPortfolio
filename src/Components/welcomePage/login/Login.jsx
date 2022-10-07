import React from "react";
import classNamees from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import "react-notifications/lib/notifications.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC00c0FPDDAcjbkpAMpE942FnyPR-dRHvM",
        {
          email: username,
          password: password,
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("you are logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.error.errors[0].message);

        toast.error(
          "please try again,  password must be 6 characters ,and change E-mail  ",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };
  return (
    <div className={classNamees.loginSection}>
      <ToastContainer />
      <div className="d-flex justify-content-start">
        <img
          className={`${classNamees.logo}`}
          src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-tools-design-website-name-logo-posters-and-25.png"
          alt=""
        />
      </div>
      <h2 style={{ textAlign: "center" }}>Welcome</h2>
      <h5 style={{ textAlign: "center", color: "#686687" }}>
        Enter your E-mail and Passoword.
      </h5>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <form className="mt-5" onSubmit={submitHandler}>
              <div className="form-outline mb-4">
                <input
                  placeholder="E-mail"
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  value={username}
                  onChange={usernameHandler}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  placeholder="Password"
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  value={password}
                  onChange={passwordHandler}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>
              <div className="row mb-4">
                <div className="col text-center">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
