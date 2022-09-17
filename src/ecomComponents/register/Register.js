import axios from "axios";
import React from "react";
import { useState } from "react";
import "react-notifications/lib/notifications.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
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
          email: email,
          password: password,
        }
      )
      .then((res) => {
        console.log(res.data.email);
        toast.success(res.data.email, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/products");
      })
      .catch((err) => {
        console.log(err.response.data.error.errors[0].message);

        toast.error(" Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 mt-5">
          <form onSubmit={submitHandler}>
            <h1>Sign Up Here</h1>
            <div class="form-group mt-5">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                value={email}
                onChange={emailHandler}
              />
              <label htmlFor="exampleInputEmail1">Father Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Father Name"
                value={email}
                onChange={emailHandler}
              />
              <label htmlFor="exampleInputEmail1">Address</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Address"
                value={email}
                onChange={emailHandler}
              />
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={emailHandler}
              />
              <small id="emailHelp" class="form-text text-muted text-white">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={passwordHandler}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default Register;
