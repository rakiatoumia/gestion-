import React from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <header className="facture__entete">
          <div className="Commande__info">
            <div className="Num__facture">Facture N° </div>
            <div className="Date">Date:</div>
            <div className="Bcommande">Bon de commande:</div>
            <div className="BL">Bon de livraison:</div>
            <div className="User">Etablie par:</div>
          </div>
          <div className="Espace"></div>
          <div className="Client__info">
            <div className="Client">Client:</div>
            <div className="fiche_client">
              <div className="Code">Code:</div>
              <div className="ClientName">ClientName:</div>
              <div className="Matricule Fiscale">Matricule Fiscale:</div>
              <div className="Tel">Tel:</div>
            </div>
          </div>
        </header>
        <div classname="facture__body">
          <div class="divTable">
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">N°</div>
                <div class="divTableCell">Réference</div>
                <div class="divTableCell">Désignation</div>
                <div class="divTableCell">Qté</div>
                <div class="divTableCell">PrixUnit</div>
                <div class="divTableCell">TVA</div>
                <div class="divTableCell">TotalHT</div>
                <div class="divTableCell">TotalTT</div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Prix">
          <div class="divTable">
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">Total HT</div>
                <div class="divTableCell">Remise</div>
                <div class="divTableCell">TotalvRemise</div>
                <div class="divTableCell">Net HT</div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Main extends React.Component {
  render() {
    return (
      <main>
        <div class="main__container">
          <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      </main>
    );
  }
}
export default Main;
