import React from 'react';
import '../styles/Sidebar.css';
import { PiCardsFill } from "react-icons/pi";
import { IoPieChartSharp } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { FaFileWaveform } from "react-icons/fa6";
const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';

  return (
    <div className={sidebarClass}>
      <button className="close-btn" onClick={closeSidebar}>
        &times;
      </button>
      <ul>
        <li>
          <a href="#cards"><PiCardsFill/>  <b>Cards</b></a>
        </li>
        <li>
          <a href="#piecharts"><IoPieChartSharp/>  <b>Charts</b></a>
        </li>
        <li>
          <a href="#table"><FaTableList/>  <b>Table</b></a>
        </li>
        <li>
          <a href="#form"><FaFileWaveform/>  <b>Form</b></a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
