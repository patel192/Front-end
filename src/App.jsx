import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";
import axios from "axios";
import { UserDashboard } from "./Components/user/UserDashboard";
import { AdminDashboard } from "./Components/Admin/AdminDashboard";
import { ResetPassword } from "./Components/ResetPassword";
import { ForgotPassword } from "./Components/ForgotPassword";

function App() {
  axios.defaults.baseURL = "http://localhost:3001/api";
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<UserDashboard />}></Route>
        <Route path="/admindashboard" element={<AdminDashboard />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
