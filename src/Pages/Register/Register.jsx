import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Register = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });

      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, []);
  return (
    <div className="register">
      <form action="" onSubmit={registerHandler}>
        <h1>Register</h1>
        <div className="formInput">
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>error</span>
        </div>
        <div className="formInput">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>error</span>
        </div>
        <div className="formInput">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>error</span>
        </div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p>Already have an account? Sign In</p>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
