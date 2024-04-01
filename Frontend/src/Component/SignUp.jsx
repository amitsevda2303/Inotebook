import React, { useState } from "react";
import Styles from "../Styles/Login.module.css";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_SIGNUP_API}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              name: credentials.name,
              password: credentials.password,
            }),
          });
          const json = await response.json();
          if (response.ok) {
            resolve("Account Created Successfully!");
            navigate("/Home");
          } else {
            reject(json.error || "An unknown error occurred!");
          }
        } catch (error) {
          reject("An error occurred while processing your request.");
        }
      }),
      {
        loading: "Creating Account...",
        success: (data) => data,
        error: (error) => error,
      }
    );
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="body">
      <section className={Styles.section}>
        {" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <div className={Styles.signin}>
          <div className={Styles.content}>
            <h2>Sign Up</h2>
            <form className={Styles.form} onSubmit={handleSubmit}>
              <div className={Styles.inputBox}>
                <input
                  type="text"
                  required
                  id="name"
                  name="name"
                  value={credentials.name}
                  onChange={onchange}
                />
                <i>Name</i>
              </div>
              <div className={Styles.inputBox}>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onchange}
                  autoComplete="username"
                />
                <i>Email</i>
              </div>
              <div className={Styles.inputBox}>
                <input
                  type="password"
                  required
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={onchange}
                  autoComplete="current-password"
                />
                <i>Password</i>
              </div>
              <div className={Styles.links}>
                {/* <input type="checkBox" value="Remember Me" /> */}
                <Link to="/">Remember Me</Link>
                <Link to="/Login">Log in</Link>
              </div>
              <div className={Styles.inputBox}>
                <input type="submit" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default SignUp;
