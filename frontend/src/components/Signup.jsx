import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/login");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Signup</h1>

        <form onSubmit={submit}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border rounded"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-2 border rounded"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Signup
          </button>
        </form>

        <div className="my-6">
          <p className="text-center">OR</p>
        </div>

        <Link to="/login" className="text-blue-500">
          Login Page
        </Link>
      </div>
    </div>
  );
}

export default Signup;
