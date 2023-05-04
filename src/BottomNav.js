import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt } from "react-icons/bi";
import { TbDiamond, TbLockAccess } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { TfiPieChart, TfiSettings } from "react-icons/tfi";

function BottomNav() {
  return (
    <>
      <style>
        {
          `
          
          .bottom-nav {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 37px;
  width: 90%;
  max-width: 1088px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 13px;
}
@media screen and (min-width: 1024px) {
  .bottom-nav {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (min-width: 1440px) {
  .bottom-nav {
    width: 80%;
  }
}

          .bottom-nav a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 12px;
  transition: all 0.2s ease-in-out;
}

.bottom-nav a.active {
  border-bottom: 6px solid #8182f9;
  padding: 7px;
  border-radius: 10px 10px 0px 0px;
  
}

.bottom-nav a:not(.active):hover {
  transform: translateY(-2px);
}

          .bottom-nav a svg {
            font-size: 24px;
            margin-bottom: 2px;
          }
        `
        }
      </style>
      <nav className="bottom-nav">
        <NavLink exact to="/home" activeClassName="active">
          <BiHomeAlt />
          <span>Home</span>
        </NavLink>
        <NavLink exact to="/profile" activeClassName="active">
          <TbDiamond />
          <span>Products</span>
        </NavLink>
        <NavLink exact to="/customers" activeClassName="active">
          <TbLockAccess />
          <span>Customers</span>
        </NavLink>
        <NavLink exact to="/shop" activeClassName="active">
          <CiShop />
          <span>Shop</span>
        </NavLink>
        <NavLink exact to="/income" activeClassName="active">
          <TfiPieChart />
          <span>Income</span>
        </NavLink>
        <NavLink exact to="/settings" activeClassName="active">
          <TfiSettings />
          <span>Settings</span>
        </NavLink>
      </nav>
    </>
  );
}

export default BottomNav;
