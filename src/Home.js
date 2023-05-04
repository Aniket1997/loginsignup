import React, { useState } from 'react'
import BottomNav from './BottomNav';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { FcSearch } from "react-icons/fc";
import { getAuth } from 'firebase/auth';
const Home = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [displayName,setDisplayName] = useState('')
    const handleSearch = (e) => {
        // handle search functionality here
      };
    
      const handleProfileClick = (e) => {
        // handle profile click functionality here
      };
    
      const handleCartClick = (e) => {
        // handle cart click functionality here
      };
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
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between appbar" >
 
    <div class="d-flex">
      
      <Link class="navbar-brand me-2 mb-1 d-flex align-items-center" to="/home">
        <img
          src="https://www.nicepng.com/png/detail/261-2611378_shopping-cart-logo-blue.png"
          height="20"
          alt="MDB Logo"
          loading="lazy"
          style={{marginTop: "2px",
          width: "85px",marginTop: "2px",height: "50px"
          }}
        />
      </Link>

  
      <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style={{minWidth: "125px"}}
        />
        <span class="input-group-text border-0 d-none d-lg-flex" style={{background: "none",cursor: "pointer"}}><FcSearch/></span>
      </form>
    </div>
    
    <ul class="navbar-nav flex-row d-none d-md-flex">
      

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-shopping-bag fa-lg"></i></span>
        </a>
      </li>

    
    </ul>
   
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center dropdown-item" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            class="rounded-circle"
            height="22"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <strong className="d-none d-sm-block ms-1">{currentUser.displayName}</strong>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-plus-circle fa-lg"></i></span>
        </a>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-comments fa-lg"></i>

          <span class="badge rounded-pill badge-notification bg-danger">6</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell fa-lg"></i>
          <span class="badge rounded-pill badge-notification bg-danger">12</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-chevron-circle-down fa-lg"></i>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
    </ul>
    
  </div>
</nav>

<div class="container py-3">
 
 
  <div class="card">
    <div class="row ">

      <div class="col-md-7 px-3">
        <div class="card-block px-6">
          <h4 class="card-title">Horizontal Card with Carousel - Bootstrap 4 </h4>
          <p class="card-text">
            The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
          </p>
          <p class="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
          <br/>
          <a href="#" class="mt-auto btn btn-primary  ">Read More</a>
        </div>
      </div>
   
      <div class="col-md-5">
        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
            <li data-target="#CarouselTest" data-slide-to="1"></li>
            <li data-target="#CarouselTest" data-slide-to="2"></li>

          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" src="https://picsum.photos/450/300?image=1072" alt=""/>
            </div>
            <div class="carousel-item">
              <img class="d-block" src="https://picsum.photos/450/300?image=855" alt=""/>
            </div>
            <div class="carousel-item">
              <img class="d-block" src="https://picsum.photos/450/300?image=355" alt=""/>
            </div>
            <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
            <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
 

</div>

<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="row">
          <div class="col-sm-5">
            <div class="card-block">
              <h4 class="card-title">Small card</h4> 
              <p>Wetgple text to build your own card.</p>
              <p>Change around the content for awsomenes</p>
              <a href="#" class="btn btn-primary btn-sm">Read More</a>
            </div>
          </div>
          <div class="col-sm-5">
            <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt=""/>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="card">
        <div class="row">
          <div class="col-sm-5">
            <img class="d-block w-100" src="https://picsum.photos/150?image=641" alt=""/>
          </div>
          <div class="col-sm-7">
            <div class="card-block">
              <h4 class="card-title">Small card</h4> 
              <p>Copy paste the HTML and CSS.</p>
              <p>Change around the content for awsomenes</p>
              <br/>
              <a href="#" class="btn btn-primary btn-sm float-right">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        <BottomNav/>
        
    </>
  )
}

export default Home