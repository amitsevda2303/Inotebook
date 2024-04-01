import React from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Log Out successfully");
    navigate("/Login");
  };

  const userLoggedIn = localStorage.getItem("token");

  let location = useLocation();

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand navbar-dark"
        style={{ backdropFilter: "blur(50px)" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            INotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userLoggedIn && (
              <ul className="navbar-nav me-auto  mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/Home" ? "active" : ""
                    }`}
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/About" ? "active" : ""
                    }`}
                    to="/About"
                  >
                    About
                  </Link>
                </li>
              </ul>
            )}
            {!userLoggedIn && ( // Conditionally render login/signup only if not logged in
              <form className="d-flex">
                <Link
                  to="/Login"
                  className="btn mx-2"
                  style={{ color: "white" }}
                >
                  Login
                </Link>
                <Link to="/SignUp" className="btn " style={{ color: "white" }}>
                  Signup
                </Link>
              </form>
            )}
            {userLoggedIn && ( // Conditionally render logout button only if logged in
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline-danger"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
