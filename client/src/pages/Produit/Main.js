import React from "react";
import ProduitForm from "../../components/Produits/ProduitForm";
import { useState } from "react";
import { deleteproduit } from "../../redux/actions/produitAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Pagination from "../../components/Pagination/Pagination";
import EditForm from "../../components/Produits/EditForm";
import "./Produit.css";

function Main() {
  const [open, setopen] = useState(false);
  const Produit = useSelector((state) => state.produitReducer);
  const dispatch = useDispatch();
  const [openedit, setopenedit] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const openDialog = () => {
    setopen(true);
  };
  const openDialogedit = () => {
    setopenedit(true);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [produitPerPage] = useState(5);
  const [Inputsearch, setInputsearch] = useState("");


  const indexOfLastProduit = currentPage * produitPerPage;
  const indexOfFirstProduit = indexOfLastProduit - produitPerPage;
  const currentProduits = Produit.slice(
    indexOfFirstProduit,
    indexOfLastProduit
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber );
  };
  return (
    <div>
        <div className="Buttons"> 
       <input
          type="text"
          placeholder="Tapez le nom du produit"
          onChange={(e) => setInputsearch(e.target.value)}
        />     
       <button className="button-10" onClick={()=> openDialog()}> +Ajouter un produit</button>
      </div>
      <br></br>
      <br></br>
      <Dialog open={open}>
      <ProduitForm setopen={setopen}/>
      </Dialog>
      <Dialog open={openedit}>   
      <EditForm setopenedit={setopenedit} currentId={currentId} setCurrentId={setCurrentId}/>
      </Dialog>
      <table className="table">
        <thead className="table__thead">
          <tr>
            <th className="table__th">Reference</th>
            <th className="table__th">Designation</th>
            <th className="table__th">PrixHT</th>
            <th className="table__th">TVA</th>
            <th className="table__th">StockMinimal</th>
            <th className="table__th">Quantite Stock</th>
            <th className="table__th">Quantite Initiale</th>
            <th className="table__th">Etat</th>
            <th className="table__th"></th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {currentProduits.filter((produit) =>
            produit.designation.toLowerCase().includes(
              Inputsearch.toString().toLowerCase()
            )).map((el) => (
            <tr className="table-row">
              <td className="table-row__td">
                <div className="table-row__info">
                  <p className="table-row__name">{el.reference}</p>
                </div>
              </td>
              <td data-column="reference" className="table-row__td">
                <div className="">
                  <p className="table-row__policy">{el.designation}</p>
                </div>
              </td>
              <td data-column="PrixHT" className="table-row__td">
                <p className="table-row__p-status">{el.PrixHT}</p>
              </td>
              <td data-column="TVA" className="table-row__td">
                {el.TVA}
              </td>
              <td data-column="StockMin" className="table-row__td">
                <p className="table-row__status">{el.StockMin}</p>
              </td>
              <td data-column="QuantiteStock" className="table-row__td">
                <p className="table-row__status">{el.QuantiteInitiale + el.QuantiteEntree - el.QuantiteSortie}</p>
              </td>
              <td data-column="QuantiteInitiale" className="table-row__td">
                <p className="table-row__status">{el.QuantiteInitiale}</p>
              </td>
              <td data-column="Etat" className="table-row__td">
                <p className="table-row__progress status--blue status">
                  En stock
                </p>
              </td>
              <td className="table-row__td">
                <img
                  alt="edit"
                  className="table-row__edit"
                  src="https://img.icons8.com/plumpy/24/000000/edit--v2.png"
                  onClick={()=>{openDialogedit()
                    setCurrentId(el._id)
                    console.log(currentId)}}
                />
                <img
                  className="table-row__bin"
                  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-gradient-kiranshastry.png"
                  alt="delete"
                  onClick={() => dispatch(deleteproduit(el._id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        produitPerPage={produitPerPage}
        totalProduits={Produit.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Main;
