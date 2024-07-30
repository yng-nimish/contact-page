import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-links-container ">
        <a href="">About Us</a>
        <a href="">Partners</a>
        <a href="">Technical Papers</a>
        <a href="">Applications</a>
        <a href="">Book</a>
        <a href=""> {""} Contact Us </a>
        <a href="">
          <FaRegCircleUser /> Login/Register
        </a>
        <a href="">
          <button className="primary-button">
            {"  "}
            <BsCart2 className="navbar-cart-icon" /> Buy a Token
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
