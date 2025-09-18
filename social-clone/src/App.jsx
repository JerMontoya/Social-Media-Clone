import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed"; 
import Profile from "./pages/Profile";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

