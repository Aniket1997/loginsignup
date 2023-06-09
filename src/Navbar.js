import React,{useState,useEffect} from 'react'
import { FcSearch } from "react-icons/fc";
import { BsHandbag } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [brands,setBrands] = useState([]);
  useEffect(() => {
    // Fetch the category data from the Firebase API endpoint
    fetch('https://shoppingapp-ce43b-default-rtdb.firebaseio.com/categories.json')
      .then(response => response.json())
      .then(data => {
        // Convert the data object to an array of categories
        const categoriesArray = Object.values(data).map(item => item.name);
        console.log(categoriesArray);
        setCategories(categoriesArray);
      })
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    // Fetch the category data from the Firebase API endpoint
    fetch('https://shoppingapp-ce43b-default-rtdb.firebaseio.com/brands.json')
      .then(response => response.json())
      .then(data => {
        // Convert the data object to an array of categories
        const categoriesArray = Object.values(data).map(item => item.name);
        console.log(categoriesArray);
        setBrands(categoriesArray);
      })
      .catch(error => console.error(error));
  }, []);
  
  
  return (
   
   <>
     
<nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={{boxShadow: "none "}}>
  
  <div className="container-fluid">
   
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src={process.env.PUBLIC_URL + '/shopping.png'}
         style={{
          width: "101px",height: "61px",borderRadius: "10px"
         }}
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ background: "#ebebeb", borderRadius: "11px"}}>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {categories.map((category, index) => (
          <a className="dropdown-item" href="#" key={index}>{category}</a>
        ))}
          
         
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Brands
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {brands.map((category, index) => (
          <a className="dropdown-item" href="#" key={index}>{category}</a>
        ))}
          
         
        </ul>
      </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{fontSize: "21px",fontWeight: "400",color: "black"}}>Contact us </a>
        </li>
      </ul>
     
    </div>
  
    <form className="d-flex input-group w-auto">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        style={{
          borderTop: "none",
    borderRight: "none",
    borderBottom: "none",
    
    width: "274px",
    height: "37px",
    boxShadow:" rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
        }}
      />
      <span className="input-group-text border-0" id="search-addon">
        <FcSearch size={25}/>
      </span>
    </form>
  
    <div className="d-flex align-items-center">
     
      <a className="text-reset me-3" href="#">
        <BsHandbag size={25} style={{borderRadius: "8px",  background: "#93ffb4", padding: "4px"}} />
        <span className="badge rounded-pill badge-notification bg-danger">2</span>
      </a>

     
      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <IoMdNotificationsOutline size={25} style={{background:"#EDBB99",padding: "4px",borderRadius: "8px"}}/>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
         <VscAccount size={25} color=""/>
          
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <Link className="dropdown-item" to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
   
  </div>

</nav>

   </>
  )
}

export default Navbar