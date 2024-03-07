import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
    

  <nav className={`${styles.r} navbar navbar-expand-lg bg-body-tertiary `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 link">
      <li className="nav-item">
          <NavLink className= {` nav-link `}
           to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={` nav-link `} aria-current="page" to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link `} to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link `} to="/cart">Cart</NavLink>
        </li>
      
      

      
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
<NavLink className="btn btn-outline-secondary px-4 mx-2" to="/signin">Sign in</NavLink>
<NavLink className="btn btn-outline-secondary px-4 mx-2" to="/SignUp">Sign up</NavLink>

{/* <button type="button" className="btn btn-outline-secondary px-4 mx-2">Sign in</button>
<button type="button" className="btn btn-outline-secondary px-3 mx-2">Sign out</button> */}


    </div>
  </div>
</nav>





    </>

    )
}

export default Navbar