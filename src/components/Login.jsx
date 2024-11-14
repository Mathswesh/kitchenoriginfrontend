import React, { useState } from 'react';
import '../assets/css/logindesign.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export const Login = () => {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle the password field visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitHandler = async (data) => {
      console.log(data)
  }
  return (
    <div className='loginjsx'>
            <div class="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div class="user-box">
                        <input type="email" name="" required="" {...register("email")} />
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" {...register("password")} />
                        <label>Password</label>
                    </div>
                    <span className="forgotpass align-left">Forgot password?</span>
                    <button className="loginbtn">Login</button>
                </form>
                <span className="signup d-block text-center fs-5 mt-3">
                    Already have an account? <Link className="nav-link" to="/signin">Signin</Link>
                </span>
            </div>
        </div>
  );
};