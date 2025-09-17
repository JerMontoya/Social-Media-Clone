import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, login, signup } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signState, setSignState] = useState("Sign In");
  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await login(auth, email, password);
      navigate("/feed");
    } else {
      await signup(email, password);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-5">
      <div className="w-full max-w-[450px] bg-black/75 backdrop-blur-md rounded-2xl p-10 mx-auto shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          {signState}
        </h1>
        <form className="flex flex-col gap-5">
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Display Name"
              type="text"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <button
            className="w-full py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition"
            onClick={user_auth}
            type="submit"
          >
            {signState}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-300">
          {signState === "Sign In" ? (
            <p>
              New to Tether?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="text-pink-400 hover:underline cursor-pointer transition"
              >
                {" "}
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="text-pink-400 hover:underline cursor-pointer transition"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
