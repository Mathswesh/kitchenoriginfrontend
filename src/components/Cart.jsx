import React from 'react'
import "../assets/css/caterar.css"
import { Link } from 'react-router-dom'
export const Cart = () => {
    return (
        <div className='caterarjsx'>
      <div class="container"> 
        <div class="form-container">
          <h2>Add kitchen</h2>
            <div class="form-group">
                <label for="restaurant-item">Restaurant item</label>
                <input type="text" id="restaurant-item" name="restaurant-item" placeholder="Restaurant item*" required />
            </div>
            
            <div class="form-group">
                <label for="restaurant-itemprice">Restaurant item price</label>
                <input type="text" id="restaurant-itemprice" name="restaurant-itemprice" placeholder="Restaurant item price *" required />
            </div>
            
            <div class="form-group">
                <label for="restaurant-menu">Restaurant menu image</label>
                <input type="file" id="restaurant-menu" name="restaurant-menu" placeholder="Restaurant menu*" required />
            </div>

            <div class="checkbox">
                <input type="checkbox" id="whatsapp-updates" name="whatsapp-updates" checked />
                <label for="whatsapp-updates">Get restaurant updates via WhatsApp</label>
            </div>

          <div class="form-footer">
            <button type="button" class="btn"><Link to="/dish" className='nav-link'>Next</Link></button>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    )
}
