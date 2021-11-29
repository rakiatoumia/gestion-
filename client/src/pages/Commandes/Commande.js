import React from 'react'
import { useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CommandeForm from "../../components/Commande/CommandeForm"
function Commande() {
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
        <div className="main__title">
        </div>
        <CommandeForm/>
      </div>
    </main>
  </div>    
  );
}

export default Commande
