import React from 'react'
import "../assets/css/orders.css"
import { useState, useEffect } from 'react'
import { Exploremenu } from '../pages/Exploremenu'
import { FoodDisplay } from '../pages/FoodDisplay'
import { FoodItem } from '../pages/FoodItem'
export const Order = () => {
  return (
    <div className='orderjsx'>
      {/* <FoodDisplay/> */}
      <Exploremenu/>  
      <FoodItem/>
    </div>
  )
}
