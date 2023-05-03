import React from 'react'
import BottomNav from './BottomNav'
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
const Home = () => {
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
           .custom-shape-divider-bottom-1683116976 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1683116976 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 231px;
}

.custom-shape-divider-bottom-1683116976 .shape-fill {
    fill: #68D3FC;
}
           `
       }
   </style>
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between" style={{padding: "10px 45px 10px 76px"}}>
 
    <div class="d-flex">
      
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="20"
          alt="MDB Logo"
          loading="lazy"
          style={{marginTop: "2px"}}
        />
      </a>

  
      <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style={{minWidth: "125px"}}
        />
        <span class="input-group-text border-0 d-none d-lg-flex"
          ><i class="fas fa-search"></i
        ></span>
      </form>
    </div>
    
    <ul class="navbar-nav flex-row d-none d-md-flex">
      

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-shopping-bag fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-users fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">2</span>
        </a>
      </li>
    </ul>
   
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            class="rounded-circle"
            height="22"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <strong class="d-none d-sm-block ms-1">John</strong>
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

  
    <div class="row row-cols-2 g-3" style={{padding: "32px 2px 48px 251px"}} >
  <div class="col">
    <div class="card mb-3" style={{maxWidth:"840px"}}>
      <div class="row g-0">
        <div class="col-md-4">
          {/* <img
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start"
          /> */}
          <div class="custom-shape-divider-bottom-1683116869">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-3" style={{maxWidth:"540px"}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
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