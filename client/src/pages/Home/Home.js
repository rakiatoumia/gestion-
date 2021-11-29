import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { afficherclient } from "../../redux/actions/clientAction";
import { afficherfournisseur } from "../../redux/actions/fourniseurAction";
import { afficherproduit } from "../../redux/actions/produitAction";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import Main from './Main'
import "./Home.css"

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(afficherclient());
    dispatch(afficherproduit());
    dispatch(afficherfournisseur());
  }, [dispatch]);
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
export default Home;
