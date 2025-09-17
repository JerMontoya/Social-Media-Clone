import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      // optional: set displayName on auth profile
      await updateProfile(cred.user, { displayName });

      // create a user doc in Firestore
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: displayName || null,
        createdAt: serverTimestamp()
      });

      // redirect to a dashboard or feed
      navigate("/feed");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <input value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder="Display name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit" disabled={loading}>{loading ? "Creating…" : "Sign up"}</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  );
}
