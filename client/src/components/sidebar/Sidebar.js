import React from "react";
import "./Sidebar.css"
import {Link} from 'react-router-dom';
import {logout} from "../../redux/actions/userAction";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import Button from '@mui/material/Button';


function Sidebar({sidebarOpen,closeSidebar}) {
  const dispatch = useDispatch();
  const history=useHistory();

  return (
    <div className={ sidebarOpen?"sidebar-responsive":""} id="sidebar">
      <div className="sidebar__title">
       <h1>Appolo Bio</h1>
        {/* <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div> */}
        <i
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
          onClick={closeSidebar}
        ></i>
      </div>
      <div className="sidebar__menu">
          <div className="sidebar__link">
            <i className="fa fa-home"></i>
            <Link to="/Dashboard">Dashboard</Link>
          </div>
          <div className="sidebar__link">
            <i className="fas fa-users"></i>
            <Link to="/Clients">Gestion des Clients</Link>
          </div>
          <div className="sidebar__link">
            <i className="fas fa-boxes"></i>
            <Link to="/Produits">Gestion des Produits</Link>
          </div>
          <div className="sidebar__link">
            <i className="fas fa-truck"></i>
            <Link to="/FournisseursList">Gestion des Fournisseurs </Link>
          </div>
          <div className="sidebar__link">
            <i className="fas fa-hand-holding-usd"></i>
            <span>Gestion des Ventes </span>
           <div>
            <li className="sidebar__subitem"><Link to="/Commandes">Nouvelle commande</Link></li>
{/*             <li className="sidebar__subitem"><Link to="/Historique des ventes">Historique des ventes</Link></li>
 */}            {/* <li className="sidebar__subitem"><Link to="/Facture">Facture</Link></li> */}
          </div>
          </div>
        {/*  <div className="sidebar__link">
            <i className="fas fa-cart-arrow-down"></i>
            <Link to="/achats">Gestion des Achats</Link>
          </div> */}
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <Button onClick={()=>dispatch(logout(history))}>Log out</Button>
          </div>
          </div>
    </div>
  );
}
export default Sidebar;
