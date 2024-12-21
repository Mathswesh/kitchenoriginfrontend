import React, { useState } from 'react';
import '../assets/css/signindesign.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userpost } from '../services/userservice'

export const Signin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    // this is for hook form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitHandler = async (data) => {
        console.log(data)
        console.log("complete")
        userpost(data)
        .then((resp)=>{
            console.log(resp)
            console.log("Done it is.")
        })
        .catch((errors)=>{
            console.log("error",errors)
        })   
    }
    return (
        <div className='signinjsx'>
            <div class="login-box">
                <h2>Signin</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div class="user-box">
                        <input type="text" name="" required="" {...register("userName")} />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="email" name="" required="" {...register("email")} />
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" {...register("password")} />
                        <label>Password</label>
                    </div>
                    <div class="user-box">
                        <input type="number" name="" required="" {...register("phoneNumber")} />
                        <label>Number</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required="" {...register("address")} />
                        <label>address</label>
                    </div>

                    <span className="forgotpass align-left">Forgot password?</span>
                    <button className="signinbtn" type='submit'>Signin</button>
                </form>
                <span className="signup d-block text-center fs-5 mt-3">
                    Already have an account? <Link className="nav-link" to="/login">Login</Link>
                </span>
            </div>
        </div>
    );
};