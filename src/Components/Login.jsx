import React from 'react'
import '../assets/css/Login.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import{ useNavigate } from 'react-router-dom';
export const Login = () => {
   const Navigate = useNavigate()
   const {register,handleSubmit,formState:{errors}} = useForm();
   const SubmitHandler = async (data) =>{
      try{
          const res = await axios.post("/user/login",data);
          if(res.status == 201){
            alert("Login Success");
            localStorage.setItem("id",res.data.data._id);
            localStorage.setItem("role",res.data.data.roleId.name);
            if(res.data.data.roleId.name === "User"){
               Navigate("/dashboard")
            }else if(res.data.data.roleId.name === "Admin") {
                Navigate("/admin-dashboard")
            }
          }
      }catch(error){
         alert("Login Failed");
      }
   }
   const ErrorHandler = {
      emailHandler:{
         required:{
            value:true,
            message:"The Email is required"
         },
         pattern:{
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"Please Enter The Valid Email Address"
         }
      },
      passwordHandler:{
         required:{
            value:true,
            message:"The Password is required"
         }
      }
   }
  return (
    <div>
     <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form onSubmit={handleSubmit(SubmitHandler)}>
            <div class="field">
               <input type="text"  {...register("email",ErrorHandler.emailHandler)} />
               <label>Email Address</label>
               {errors.email?.message}
            </div>
            <div class="field">
               <input type="password" {...register("password",ErrorHandler.passwordHandler)} />
               <label>Password</label>
               {errors.password?.message}
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>
            <div class="field">
               <input type="submit" value="Login" />
            </div>
            <div class="signup-link">
               Not a member? <a href="/signup">Signup now</a>
            </div>
         </form>
      </div>
      </div>
  )
}
