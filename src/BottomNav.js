import React,{useState} from 'react';

import { BsClipboard } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import { MdCategory,MdNotificationsActive } from "react-icons/md";
import {GoSettings} from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid'
import FilterDrawer from './Components/Drawer/FilterDrawer';

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
          .mainGrid
          {

          }
          
         
        `
        }
      </style>
      <Grid container className='mainGrid' justify="center" alignItems="center" style={{ borderRadius: "10px", position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "whitesmoke", height: "50px", width: "500px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
  <Grid item xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <GoSettings onClick={handleDrawerToggle} style={{cursor:"pointer"}}/>
  </Grid>
  <Grid item xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <TbArrowsSort />
  </Grid>
  <Grid item xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <MdCategory />
  </Grid>
  <Grid item xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <MdNotificationsActive />
  </Grid>
  <Grid item xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <BsClipboard />
  </Grid>
  <Grid item xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <IoMdSettings />
  </Grid>
</Grid>




         <Drawer variant="persistent" anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <FilterDrawer/>
      </Drawer>
    </>
  );
}

export default BottomNav;
