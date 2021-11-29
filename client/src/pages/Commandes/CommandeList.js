import React from 'react'
import { useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "./Main"

function CommandeList() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
      setSidebarOpen(true);
    };
    const closeSidebar = () => {
      setSidebarOpen(false);
    };
    return (
        <div className="container">
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    <main>
      <div className="main__container">
       
       <Main></Main>
      </div>
    </main>
  </div>    
  );
}

export default CommandeList;

