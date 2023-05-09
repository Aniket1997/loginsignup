import React, { useState } from 'react'
import BottomNav from './BottomNav';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { FcSearch } from "react-icons/fc";
import { getAuth } from 'firebase/auth';
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from './Navbar'
const Home = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  
  const date = new Date();
  const hours = date.getHours();
  let greeting ;
  if (hours < 12) {
    greeting = 'Good morning';
  } else if (hours < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return (
    <>
   <style>
       {
           `
           .custom-shape-divider-bottom-1683139836 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1683139836 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-bottom-1683139836 .shape-fill {
    fill: #FFFFFF;
}
@media screen and (min-width: 1024px) {
  .custom-shape-divider-bottom-1683116976 {
    height: 150px;
  }
}

@media screen and (min-width: 1440px) {
  .custom-shape-divider-bottom-1683116976 {
    height: 200px;
  }
}
.appbar
{
  padding: 0px 45px 10px 76px;
}
@media screen and(min-width:1024px)
{
  padding: 0px 135px 0px 131px;
}
@media screen and(min-width:1440px)
{
  padding: 0px 135px 0px 131px;
}
.card-block {
    font-size: 1em;
    position: relative;
    margin: 0;
    padding: 1em;
    border: none;
    border-top: 1px solid rgba(34, 36, 38, .1);
    box-shadow: none;
     
}
.card {
    font-size: 1em;
    overflow: hidden;
    padding: 5;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    margin-top:20px;
}

.carousel-indicators li {
    border-radius: 12px;
    width: 12px;
    height: 12px;
    background-color: #404040;
}
.carousel-indicators li {
    border-radius: 12px;
    width: 12px;
    height: 12px;
    background-color: #404040;
}
.carousel-indicators .active {
    background-color: white;
    max-width: 12px;
    margin: 0 3px;
    height: 12px;
}
.carousel-control-prev-icon {
 background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}
 lex-direction: column;
}

.btn {
  margin-top: auto;
}
           `
       }
   </style>
    
<Navbar/>
<Grid container>
<Grid item xs={6} style={{
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
    marginRight: "305px", 
    display: "flex",
    justifyContent: "start",
    marginLeft: "305px",
    padding: "31px",
    borderRadius: "10px"}}>
<h1>Hello John , {greeting}</h1>
</Grid>
<Grid item xs={6}>

</Grid>
</Grid>




        <BottomNav/>
        
    </>
  )
}

export default Home