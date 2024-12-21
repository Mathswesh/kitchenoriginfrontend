import React, { useState } from 'react'
import '../assets/css/navbardesign.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {

  const toggleNavbar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
  };

  return (
    <div className='navbarjsx'>
      <nav>
        <div className="logo"><Link className='nav-link' to={"/landingpage"}>KITCHENORIGIN</Link></div>
        <ul className='navbar'>
          <li><Link className='nav-link' to={"/developer"}><button>Contact us</button></Link></li>
          <li><Link className='nav-link' to={"/caterar"}><button>Add kitchen</button></Link></li>
          <li><Link className='nav-link' to={"/order"}><button>Orders</button></Link></li>
        </ul>
        <ul className='sidebar'>
          <li><div className="hamburger" onClick={toggleNavbar}><i class="fa-solid fa-bars"></i></div></li>
          <li><Link className='nav-link' to={"/developer"}><button>Contact us</button></Link></li>
          <li><Link className='nav-link' to={"/caterar"}><button>Add kitchen</button></Link></li>
          <li><Link className='nav-link' to={"/order"}><button>Orders</button></Link></li>
          <li><Link className='nav-link' to={"/order"}><button>Your Profiel</button></Link></li>
          <li><Link className='nav-link' to={"/order"}><button>Cancel Order</button></Link></li>
          <li><Link className='nav-link' to={"/order"}><button>Order Tracking</button></Link></li>
          <li><Link className='nav-link' to={"/order"}><button>Payment Options</button></Link></li>

        </ul>
        <div className="navbarMode">
            <Link className='nav-link' to={"/signin"}><i class="fa-solid fa-user"></i></Link>
            <Link className='nav-link' to={"/cartorder"}><i class="fa-solid fa-cart-shopping"></i></Link>
            <div className="hamburger" onClick={toggleNavbar}><i class="fa-solid fa-bars"></i></div>
        </div>
      </nav>
    </div>
  )
}
