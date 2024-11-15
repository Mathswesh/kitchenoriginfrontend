import React from 'react'
import '../assets/css/navbardesign.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {

  return (
    <div className='navbarjsx'>
        <div className="navbarContent">
          <div className="logo">
            <Link className='nav-link' to={"/landingpage"}>
              KITCHENORIGIN
              {/* here will be svg */}
            </Link>
          </div>
          <div className="navbarList">
              <Link className='nav-link' to={"/developer"}><button>Contact us</button></Link>
              <Link className='nav-link' to={"/login"}><button>Add kitchen</button></Link>
              <Link className='nav-link' to={"/order"}><button>Orders</button></Link>
          </div>
          <div className="navbarMode">
            <Link className='nav-link' to={"/signin"}><i class="fa-solid fa-user"></i></Link>
          </div>
        </div>
    </div>
  )
}
