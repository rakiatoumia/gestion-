import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  afficherproduit,
} from "../../redux/actions/produitAction";
import "./Produit.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from './Main'

function ProduitsList() {
  //states
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //dispatch actions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(afficherproduit());
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
export default ProduitsList;
