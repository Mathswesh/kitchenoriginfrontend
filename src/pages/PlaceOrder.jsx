import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/placeorder.css"

export const PlaceOrder = () => {
  
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='Firstname' />
          <input type="text" name="" id="" placeholder='Lastname' />
        </div>
        <input type="email" name="" id="" placeholder='Email' />
        <input type="text" name="" id="" placeholder='Password' />
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='City' />
          <input type="text" name="" id="" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='Zip code' />
          <input type="text" name="" id="" placeholder='Country' />
        </div>
        <input type="text" name="" id="" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Toatl</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              {/* <p>${getTotalCartAmount()}</p> */}
            </div>
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>${2}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              {/* <p>${getTotalCartAmount() + 2}</p> */}
            </div>
            <button>Pay Amount</button>
          </div>
        </div>

      </div>
    </form>
  )
}
