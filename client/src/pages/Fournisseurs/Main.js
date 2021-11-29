import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  afficherfournisseur,
  deletefournisseur,
} from "../../redux/actions/fourniseurAction";
import FournisseurForm from "../../components/Fournisseurs/FournisseurForm";
import Dialog from "@material-ui/core/Dialog";
import Pagination from "../../components/Pagination/Pagination";

function Main() {
   const [open, setopen] = useState(false);
    const Fournisseur = useSelector((state) => state.fournisseurReducer);
    const openDialog = () => {
      setopen(true);
    };
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(afficherfournisseur());
    }, [dispatch]);
    const [currentPage, setCurrentPage] = useState(1);
    const [produitPerPage] = useState(5);
    const [Inputsearch, setInputsearch] = useState("");

  
    const indexOfLastProduit = currentPage * produitPerPage;
    const indexOfFirstProduit = indexOfLastProduit - produitPerPage;
    const currentFournisseurs = Fournisseur.slice(
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
          placeholder="tapez le nom de fournisseur"
          onChange={(e) => setInputsearch(e.target.value)}
        />     
            <button className="button-10" onClick={()=> openDialog()}>
              Ajouter un nouveau fournisseur
            </button></div>
            <br></br>
            <br></br>
            <Dialog open={open}>   
            <FournisseurForm setopen={setopen}/>
            </Dialog>
            <table className="table">
        <thead className="table__thead">
          <tr>
            <th className="table__th">Societe</th>
            <th className="table__th">Nom</th>
            <th className="table__th">Prenom</th>
            <th className="table__th">Adresse</th>
            <th className="table__th">Tel</th>
            <th className="table__th">Email</th>
            <th className="table__th"></th>

          </tr>
        </thead>
        <tbody className="table__tbody">
          {currentFournisseurs.filter((fournisseur) =>
            fournisseur.firstname.toLowerCase().includes(
              Inputsearch.toString().toLowerCase()
            )).map((el) => (
            <tr className="table-row">
              
              <td className="table-row__td">
                <div className="table-row__info">
                  <p className="table-row__name">{el.NomSociete}</p>
                </div>
              </td>
              <td data-column="reference" className="table-row__td">
                <div className="">
                  <p className="table-row__policy">{el.firstname}</p>
                </div>
              </td>
              <td data-column="PrixHT" className="table-row__td">
                <p className="table-row__p-status">{el.lastname}</p>
              </td>
              <td data-column="StockMin" className="table-row__td">
                <p className="table-row__status">{el.Adresse}</p>
              </td>
              <td data-column="Etat" className="table-row__td">
                <p className="table-row__progress status">
                  {el.PhoneNumber}
                </p>
              </td>
              <td data-column="Etat" className="table-row__td">
                <p className="table-row__progress status">
                  {el.email}
                </p>
              </td>
              <td className="table-row__td">
                <img
                  alt="edit"
                  className="table-row__edit"
                  src="https://img.icons8.com/plumpy/24/000000/edit--v2.png"
                />
                <img
                  className="table-row__bin"
                  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-gradient-kiranshastry.png"
                  alt="delete"
                  onClick={() => dispatch(deletefournisseur(el._id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        produitPerPage={produitPerPage}
        totalProduits={Fournisseur.length}
        paginate={paginate}
      />
          </div>
    )
}

export default Main
