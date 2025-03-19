import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";
import axios from "axios";
import { Userdashboard } from "./Components/user/Userdashboard";
import { AdminDashboard } from "./Components/Admin/AdminDashboard";

function App() {
  axios.defaults.baseURL = "http://localhost:3001/api";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Userdashboard />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        
        
      </Routes>
    </>
  );
}

export default App;
