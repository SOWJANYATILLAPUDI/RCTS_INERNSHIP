import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="menu-btn border" onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className="nav-logo border">
         <div className="logo">EFFI READS</div>
        </div>
      <div className="nav-search">
        <input placeholder="    Search Book" className="search-input"/>
        <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
