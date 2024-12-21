import React from 'react'
import '../assets/css/caterar.css'
import { Link } from 'react-router-dom'
import { caterarpost } from '../services/userservice';
import { useForm } from 'react-hook-form';

export const Caterar = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitHandler = async (data) => {
      console.log(data)
      console.log("complete")
      caterarpost(data)
      .then((resp)=>{
          console.log(resp)
          console.log("Done it is.")
      })
      .catch((errors)=>{
          console.log("error",errors)
      })   
  }
  
  return (
    <div className='caterarjsx'>
      <div class="container"> 
        <div class="form-container">
          <h2>Add kitchen</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
          <div class="form-group">
            <label for="restaurant-name">Restaurant Name</label>
            <input type="text" id="restaurant-name" name="restaurant-name"  placeholder="Restaurant name*" required {...register("caterarName")}/>
          </div>
          <div class="form-group">
            <label for="restaurant-address">Restaurant Address</label>
            <input type="text" id="restaurant-address" name="restaurant-address" placeholder="Restaurant address*" required {...register("cateraraddress")} />
          </div>
          <div class="form-group">
            <label for="owner-name">Owner Details</label>
            <input type="text" id="owner-name" name="owner-name" placeholder="Full name*" required {...register("name")}/>
          </div>
          {/* <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email address*" required/>
          </div> */}

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone number*" required {...register("phoneNumber")} />
          </div>

          <div class="form-group">
            <label for="time">Opening time</label>
            <input type="time" id="time" name="time" placeholder="Opening time*" required {...register("openingTime")} />
          </div>

          <div class="form-group">
            <label for="time">Closing time</label>
            <input type="time" id="time" name="time" placeholder="Closing time*" required {...register("closingTime")}/>
          </div>
          <div class="form-footer">
            <button type="button" class="btn"><Link to="/cart" className='nav-link'>Next</Link></button>
          </div>
          <button className="signinbtn" type='submit'>Submit</button>
          </form>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  )
}
