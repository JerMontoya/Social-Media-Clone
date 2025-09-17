import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Feed from "./pages/Feed"; // create a simple feed component

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="*" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

