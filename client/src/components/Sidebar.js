import React from 'react';
import '../styles/Sidebar.css';
const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';

  return (
    <div className={sidebarClass}>
      <button className="close-btn" onClick={closeSidebar}>
        &times;
      </button>
      <ul>
        {/* <li>
          <a href="#content">Content</a>
        </li> */}
        <li>
          <a href="#cards">Cards</a>
        </li>
        <li>
          <a href="#piecharts">Charts</a>
        </li>
        <li>
          <a href="#table">Table</a>
        </li>
        <li>
          <a href="#form">Form</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;