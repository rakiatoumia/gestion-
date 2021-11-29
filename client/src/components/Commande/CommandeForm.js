import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { afficherproduit } from "../../redux/actions/produitAction";
import { addcommande } from "../../redux/actions/commandeAction";
import { affichercommande } from "../../redux/actions/commandeAction";
import Grid from "@mui/material/Grid";
import { afficherclient } from "../../redux/actions/clientAction";
import { editproduit } from "../../redux/actions/produitAction";
import "./commande.css";

function CommandeForm() {

  //states

  var [products, setproducts] = useState([]);
  const [productdata, setproductdata] = useState({
    produit: "",
    quantite: null,
  });
  const [commandedata, setcommandedata] = useState({
    reference: "",
    client: "",
    produits: [],
  });
  const [produits, setproduits] = useState([]);
  const Client = useSelector((state) => state.clientReducer);
  const Produit = useSelector((state) => state.produitReducer);
  const Commande = useSelector((state) => state.commandeReducer);
  const dispatch = useDispatch();

  //dispatch actions

  useEffect(() => {
    dispatch(afficherproduit());
    dispatch(affichercommande());
    dispatch(afficherclient());
  }, [dispatch]);
  const getproduitbyid = (id) => {
    var elementPos = Produit.map((x) => x._id).indexOf(id);
    return Produit[elementPos];
  };
  const updateStock = () => {
    products.map((el) => {
      let id = el.produit._id;
      getproduitbyid(id);
      dispatch(editproduit(id, { QuantiteSortie: Number(el.quantite) }));
    });
  };

  return (
    <main>
      <div className="main__container">
        <h2 className="Title"> Passer une nouvelle commande</h2>
        <h3 className="Sub_Title">Basic Informations</h3>
        <div className="basic__info">
          <div className="Instructions">
            <div>Instructions</div>
            <ul className="instruction_item">
              <li>
                Chech and recheck added products before creating the order.
              </li>
              <li>
                Products added can not edited later but other informations are
                edtibale.
              </li>
              <li> You can add multiple products in a single order</li>
            </ul>
          </div>
          <div className="Commande__info">
            <div>Bon de commande</div>
            <input
              type="text"
              name="reference"
              className="boncommande"
              placeholder="Taper le bon de commande"
              onChange={(e) =>
                setcommandedata({
                  ...commandedata,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <select
              className="select_classic"
              name="client"
              onChange={(e) =>
                setcommandedata({
                  ...commandedata,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>Choisir le client:</option>
              {Client.map((el) => (
                <option value={el._id}>{el.NomSociete}</option>
              ))}
            </select>
          </div>
        </div>
        <h3 className="Sub_Title"> Produit Selectionnés</h3>
        <div className="Achat">
          <Grid item xs={12}>
            <table>
              <thead>
                <tr>
                  <th scope="col">designation</th>
                  <th scope="col">quantite</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="designation">
                    <select
                      className="select_classic"
                      onChange={(e) => {
                        setproductdata({
                          ...productdata,
                          produit: getproduitbyid(e.target.value),
                        });
                      }}
                    >
                      <option>Selectionner un produit:</option>
                      {Produit.map((el) => (
                        <option value={el._id}>{el.designation}</option>
                      ))}
                    </select>
                  </td>
                  <td data-label="quantite">
                    <input
                      type="Number"
                      onChange={(e) => {
                        setproductdata({
                          ...productdata,
                          quantite: e.target.value,
                        });
                      }}
                    ></input>
                  </td>
                  <td data-label="ajouter panier">
                    <button
                      onClick={() => setproducts([...products, productdata])}
                      className="button-10"
                    >
                      ajouter au panier
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </div>

        <h3 className="Sub_Title">Panier</h3>
        <div className="Panier">
          <div class="divTable">
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">Produit</div>
                <div class="divTableCell">PrixHT</div>
                <div class="divTableCell">TVA</div>
                <div class="divTableCell">PrixTT</div>
                <div class="divTableCell">Action</div>
              </div>
              {products.map((el) => (
                <div class="divTableRow">
                  <div class="divTableCell">{el.produit.designation}</div>
                  <div class="divTableCell">
                    {(el.quantite * el.produit.PrixHT).toFixed(3)}
                  </div>
                  <div class="divTableCell">{el.produit.TVA}</div>
                  <div class="divTableCell">
                    {" "}
                    {(
                      (el.quantite *
                        el.produit.PrixHT *
                        (100 + el.produit.TVA)) /
                      100
                    ).toFixed(3)}
                  </div>
                  <div class="divTableCell">
                  <i class="fas fa-window-close" onClick={() => {
                        setproducts(
                          products.filter(
                            (elem) => elem.produit._id !== el.produit._id
                          )
                        );
                      }}></i>                    
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              setproduits(products);
              setcommandedata({ ...commandedata, produits: produits });
              dispatch(addcommande(commandedata));
              updateStock();
            }}
            className="button-10"
          >
            Passer la commande
          </button>
          <button className="button-10">Annuler</button>
        </div>
      </div>
    </main>
  );
}
export default CommandeForm;
