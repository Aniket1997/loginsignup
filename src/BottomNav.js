import React,{useState} from 'react';

import { BsClipboard } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import { MdCategory,MdNotificationsActive } from "react-icons/md";
import {GoSettings} from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid'

function BottomNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
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
      <Grid container style={{border:"1px solid black",borderRadius:"10px", position: "fixed", bottom: "20px"}}>
       <Grid item xs={2}>
       <GoSettings />
       </Grid>
       <Grid item xs={2}>
       <TbArrowsSort />
       </Grid>
       <Grid item xs={2}>
       <MdCategory />
       </Grid>
       <Grid item xs={2}>
       <MdNotificationsActive />
       </Grid>
       <Grid item xs={2}>
       <BsClipboard />
       </Grid>
       <Grid item xs={2}>
       <IoMdSettings />
       </Grid>

      </Grid>
      {/* <nav className="bottom-nav">
        <NavLink activeClassName="active" >
          <BsFilter onClick={handleDrawerToggle}/>
          <span>Filter</span>
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
      </nav> */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <h1>Hello</h1>
      </Drawer>
    </>
  );
}

export default BottomNav;
