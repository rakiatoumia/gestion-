import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import Home from "./pages/Home/Home";
import ClientsList from "./pages/Client/ClientsList";
import FournisseursList from "./pages/Fournisseurs/FournisseursList";
import ProduitsList from "./pages/Produit/ProduitsList";
import Commande from "./pages/Commandes/Commande";
import Facture from "./components/Facture/Facture";
import CommandeList from "./pages/Commandes/CommandeList";

function App() {
 
  return (
    <div>
      <BrowserRouter>        
        <Route  exact path="/" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/Dashboard" component={Home}></Route>
        <Route path="/Clients" component={ClientsList}></Route>
        <Route path="/Produits" component={ProduitsList}></Route>
        <Route path="/FournisseursList" component={FournisseursList}></Route>
        <Route path="/Commandes" component={Commande}></Route>
        <Route path="/Achats" component={FournisseursList}></Route>
        <Route path="/Facture" component={Facture}></Route>
        <Route path="/Historique des ventes" component={CommandeList}></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
