import './App.css';
import Navbar from "./components/Navbar";
import  Sidebar from "./components/Sidebar";
// import Content from "./components/Content";
import Cards from "./components/Cards";
import Piechart from "./components/Piechart";
import Table from "./components/Table";
import Form from "./components/Form";
import Footer from "./components/Footer";
import React, { useState } from 'react';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
       <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      {/* <Content/> */}
      <Cards/>
      <Piechart/>
      <Table/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
