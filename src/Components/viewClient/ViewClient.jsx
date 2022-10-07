import React from "react";
import { Link } from "react-router-dom";
import classes from "./ViewClient.module.css";

function ViewClient() {
  return (
    <div className="container-fluid vh-100">
      <div className="row">
        <div style={{ backgroundColor: "white" }} className="col-md-2 vh-100">
          <div className={classes.comName}>
            <p>Company name</p>
          </div>
          <div className="main ">
            <div className="form-group has-search">
              <input
                type="text"
                className="form-control px-5 "
                placeholder="Search module"
                style={{ " border-radius": "80px" }}
              />
            </div>
          </div>
          <h5>Client Master</h5>
          <button
            type="button"
            className="btn btn-primary text-left  btn-block"
          >
            View Client
          </button>
          <button type="button" className="btn btn-light text-left  btn-block">
            Add Client
          </button>
          <div style={{ position: "absolute", bottom: "0" }}>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              style={{ width: "50px", float: "left" }}
              alt="Avatar"
            />
            <h5 style={{ float: "left" }} className="ml-2">
              Rafi ullah
            </h5>
            <br />
            <span style={{ float: "left" }}>Disc about </span>
          </div>
        </div>
        <div className="col-md-10 " style={{ backgroundColor: "#F5F5F5" }}>
          <div>
            <h4 className="m-2">View Clients</h4>
          </div>
          <div>
            <a style={{ color: "black" }} href="">
              {" "}
              Client Master
            </a>
            <span>/</span>
            <a style={{ color: "black" }} href="">
              {" "}
              View Clients
            </a>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">company name </th>
                  <th scope="col">email address</th>
                  <th scope="col">phone no </th>
                  <th scope="col">contacy person</th>
                  <th scope="col">Facilitator</th>
                  <th scope="col">sites</th>
                  <th scope="col">tenants</th>
                  <th scope="col">tenant groups</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    {" "}
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      style={{ width: "50px", float: "left" }}
                      alt="Avatar"
                    />{" "}
                    <p className="mt-3">rafi ullah</p>
                  </th>
                  <td>Mark@gmail.com</td>
                  <td>00913329745623</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      style={{ width: "50px", float: "left" }}
                      alt="Avatar"
                    />{" "}
                    <p className="mt-3">rafi ullah</p>
                  </th>
                  <td>Mark@gmail.com</td>
                  <td>00913329745623</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      style={{ width: "50px", float: "left" }}
                      alt="Avatar"
                    />{" "}
                    <p className="mt-3">rafi ullah</p>
                  </th>
                  <td>Mark@gmail.com</td>
                  <td>00913329745623</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      style={{ width: "50px", float: "left" }}
                      alt="Avatar"
                    />{" "}
                    <p className="mt-3">rafi ullah</p>
                  </th>
                  <td>Mark@gmail.com</td>
                  <td>00913329745623</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      style={{ width: "50px", float: "left" }}
                      alt="Avatar"
                    />{" "}
                    <p className="mt-3">rafi ullah</p>
                  </th>
                  <td>Mark@gmail.com</td>
                  <td>00913329745623</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      style={{ width: "50px", float: "left" }}
                      alt="Avatar"
                    />{" "}
                    <p className="mt-3">rafi ullah</p>
                  </th>
                  <td>Mark@gmail.com</td>
                  <td>00913329745623</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item"></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ---
                  </a>
                </li>
                <li className="page-item"></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item"></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item"></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item"></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewClient;
