// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/feed");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <form onSubmit={handle}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email"/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password"/>
      <button>Login</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </form>
  );
}
