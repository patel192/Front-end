import React from "react";
import "../assets/css/Signup.css";
import { useForm } from "react-hook-form";
export const Signup = () => {
  const{register,handleSubmit,formState:{errors}} = useForm();
  const submitHandler = (data) =>{
    console.log("data...",data)
    console.log(errors)
  }
  const ErrorHandler = {
    NameHandler :{
      required:{
        value:true,
        message:"The name is required"
      }
    },
    AgeHandler:{
      required:{
        value:true,
        message:"The age is required"
      },
      min:{
        value:18,
        message:"The Minimum age should be 18"
      }
    },
    EmailHandler:{
      required:{
        value:true,
        message:"The email is required"
      },
      pattern:{
        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message:"Enter the valid email"
      }
    },
    PasswordHandler:{
      required:{
        value:true,
        message:"The password is required"
      },
      minLength:{
        value:8,
        message:"The Minimum length of password should be 8"
      },
      maxLength:{
        value:14,
        message:"The Maximum length of password should be 14"
      },
      pattern:{
        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:"Use strong password"
      }
    }
  }
  return (
    <div class="container">
      <div class="content">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" placeholder="Enter your name" {...register("name",ErrorHandler.NameHandler)
               } />
               {errors.name?.message}
            </div>
            <div class="input-box">
              <span class="details">Age</span>
              <input type="Number" placeholder="Enter your number" min="18" {...register("age",ErrorHandler.AgeHandler)} />
              {errors.age?.message}
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" {...register("email",ErrorHandler.EmailHandler)} />
              {errors.email?.message}
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input type="text" placeholder="Enter your password" {...register("password",ErrorHandler.PasswordHandler)} />
              {errors.password?.message}
            </div>
          </div>
          
          
          <div class="button">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
      <div class="login-link">
        Already a member? <a href="/login">Login now</a>
      </div>
    </div>
  );
};
