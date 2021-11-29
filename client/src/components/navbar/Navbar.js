import "./Navbar.css";
import React from 'react'

function Navbar({sidebarOpen,openSidebar}) {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={openSidebar} >
            <i className="fa fa-bars"  > </i>
            </div>
     {/*        <div className="navbar__left">
            </div>
            <div className="navbar__right">
            <a href="/hhh">
                <i className="fa fa-search"></i>
            </a>
            <a href="/jjj">
                <i className="fa fa-clock-o"></i>
            </a>
            <a href="/kkk">
                <img width="30" src={avatar} alt="avatar"></img>
            </a>
            </div> */}
            
        </nav>
    )
}

export default Navbar
