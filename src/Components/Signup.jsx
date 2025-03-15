import React from "react";
import "../assets/css/Signup.css";
export const Signup = () => {
  return (
    <div class="container">
      <div class="content">
        <form>
          <div class="user-details">
            <div class="input-box">
              <span class="details">First Name</span>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="input-box">
              <span class="details">Last Name</span>
              <input
                type="text"
                placeholder="Enter your username"
                
              />
              
            </div>
            <div class="input-box">
              <span class="details">Age</span>
              <input
                type="Number"
                placeholder="Enter your number"
                min="18"
                
              />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input
                type="text"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div class="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class="gender-title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};
