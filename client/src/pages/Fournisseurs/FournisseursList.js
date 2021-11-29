import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  afficherfournisseur,

} from "../../redux/actions/fourniseurAction";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "./Main"
import './Fournisseur.css'

function FournisseursList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(afficherfournisseur());
  }, [dispatch]);
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
       <Main></Main>
      </div>
    </main>
  </div>    
  );
}
export default FournisseursList;
