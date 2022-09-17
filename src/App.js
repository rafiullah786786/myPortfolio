import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./ecomComponents/home/Home";
import Logout from "./ecomComponents/logout/Logout";
import Login from "./ecomComponents/login/Login";
import Register from "./ecomComponents/register/Register";
import Products from "./ecomComponents/products/Products";
import Error from "./ecomComponents/error/Error";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Product from "./ecomComponents/product/Product";
import CompletePortfolio from "./components/CompletePortfolio";
function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [login]);

  console.log(login);
  const setLoginState = (data) => {};
  return (
    <div className={`${classes.App}  my-0`}>
      <div>
        <div>
          <Router>
            <div>
              <nav className="navbar navbar-expand-lg bg-dark text-white">
                <div className="container-fluid">
                  <Link className="navbar-brand text-white six fs-3" to="/">
                    Portfolio
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul
                      className="navbar-nav me-auto my-2 my-lg-0 "
                      style={{ "--bs-scroll-height": "100px" }}
                    >
                      <li className="nav-item">
                        <Link
                          className="nav-link text-white text-white"
                          to="/home"
                        >
                          Home <span className="sr-only"></span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link text-white" to="products">
                          Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="register">
                          SignUp
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="login">
                          LogIn
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="logout">
                          LogOut
                        </Link>
                      </li>
                    </ul>
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-success "
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className=" ml-0 pl-0">
              <Routes>
                <Route path="/" element={<CompletePortfolio />} />
                <Route path="/home" element={<Home />} />

                <Route
                  path="/logout"
                  element={<Logout propsdata={setLoginState} />}
                />

                <Route
                  path="/login"
                  element={<Login propsdata={setLoginState} />}
                />
                <Route path="/product/:pid" element={<Product />} />

                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
