import React from "react";
import Welcome from "./Components/welcomePage/welcome/Welcome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewClient from "./Components/viewClient/ViewClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Welcome /> */}
      <ToastContainer />
      <Router>
        <div></div>
        <div className=" ml-0 pl-0">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<ViewClient />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
