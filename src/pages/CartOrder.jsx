import React, { useContext } from 'react'
import '../assets/css/cartorderdesign.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../services/slices/dishslice'
export const CartOrder = () => {
  const state = useSelector((state) => state)
  console.log(state.dishdata.dishshesh)
  console.log(state.dishdata.totalamount)
  const dispatch = useDispatch();
  const removecart = (dish) => {
    dispatch(removeItem(dish))
  }
  return (
    <div className='cartorder'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {state.dishdata.dishshesh.map((item, index) => {
          return (
            <div className="cart-items-title cart-items-item">
              <img src={item.caterarName} alt="" />
              <p>{item.dishName}</p>
              <p>{item.price}</p>
              <p>{item.price * item.counts}</p>
              <p>{item.counts}</p>
              <p onClick={()=>removecart(item._id)} className='cross'><button className='btn'>Cancel</button></p>
            </div>
          )
          // }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Toatal</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              {/* <p>${getTotalCartAmount()}</p> */}
            </div>
            <div>
              {state.dishdata?.totalamount >= 1000 ? (
                <div className="">
                  <div className="cart-total-details">
                    <p>cashback </p>
                    <p>$2</p>
                  </div>
                  <div className="cart-total-details">
                    <p>Total</p>
                    <p>${state.dishdata?.totalamount-2}</p>
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>$2</p>
                  </div>
                  <div className="cart-total-details">
                    <p>Total</p>
                    <p>${state.dishdata?.totalamount + 2}</p>
                  </div>
                </div>
              )}
            </div>
            <Link className='nav-link' to={"/payamount"} ><button>Check Amount</button></Link>
          </div>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have promo code , than Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" name="Promo code" id="" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
