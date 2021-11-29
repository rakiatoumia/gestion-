import React from 'react'
import { useSelector } from "react-redux";
import './Home.css'
import Charts from '../../components/Charts/Charts';

function Main() {
    const Client = useSelector((state) => state.clientReducer);
    const Produit = useSelector((state) => state.produitReducer);
    const Fournisseur = useSelector((state) => state.fournisseurReducer);
    return (
       <div>
        <div className="main__cards">
        <div className="card">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Clients</p>
            <span className="font-bold text-title">{Client.length}</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Providers</p>
            <span className="font-bold text-title">{Fournisseur.length}</span>
          </div>
        </div>

        <div className="card">
          <i
            className="fa fa-video-camera fa-2x text-yellow"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Products</p>
            <span className="font-bold text-title">{Produit.length}</span>
          </div>
        </div>
      </div>
      <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Bembla,Monastir,Tunisie</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div id="apex1"></div>
              <Charts/>
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Bembla,Monastir,Tunisie</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>$75,300</p>
                </div>

                <div className="card2">
                  <h1>Sales</h1>
                  <p>$124,200</p>
                </div>

                <div className="card3">
                  <h1>Users</h1>
                  <p>3900</p>
                </div>

                <div className="card4">
                  <h1>Orders</h1>
                  <p>1881</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    )
}

export default Main
