import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, login, signup } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-5">
      <div className="flex justify-start">
        <img
          src={logo}
          alt=""
          className="h-12 w-12 rounded-full shadow-lg border-2 border-white/30"
        />
        <h1 className="mt-1 mx-2 bg-gradient-to-r from-purple-800 via-pink-700 to-red-700 bg-clip-text text-transparent text-4xl font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">
          Tether
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-[450px] bg-black/75 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 mx-auto shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-8">
            {signState}
          </h1>
          <form className="flex flex-col gap-4 sm:gap-5">
            {signState === "Sign Up" ? (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Display Name"
                type="text"
                className="w-full p-3 sm:p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            ) : (
              <></>
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="w-full p-3 sm:p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="w-full p-3 sm:p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <button
              className="w-full py-3 sm:py-4 bg-pink-500 text-white text-lg sm:text-xl font-semibold rounded-md hover:bg-pink-600 transition"
              onClick={user_auth}
              type="submit"
            >
              {signState}
            </button>
          </form>
          <div className="mt-5 sm:mt-6 text-center text-gray-300 text-sm sm:text-base">
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
    </div>
  );
};

export default Login;
