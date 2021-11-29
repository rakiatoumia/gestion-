import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  Pagination from "../../components/Pagination/Pagination";
import {affichercommande} from "../../redux/actions/commandeAction"

function Main() {
  const Commande = useSelector((state) => state.commandeReducer);
  console.log(Commande)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(affichercommande());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commandePerPage] = useState(5);
  const indexOfLastCommande = currentPage * commandePerPage;
  const indexOfFirstCommande = indexOfLastCommande - commandePerPage;
  const currentCommandes = Commande.slice(
    indexOfFirstCommande,
    indexOfLastCommande
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber );
  };
  return (
    <div>
      <table className="table">
        <thead className="table__thead">
          <tr>
            <th className="table__th">Reference</th>
            <th className="table__th">Client</th>
            <th className="table__th"></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {currentCommandes.map((el) => (
            <tr className="table-row">
              <td className="table-row__td">
                <div className="table-row__info">
                  <p className="table-row__name">{el.reference}</p>
                </div>
              </td>
              <td data-column="reference" className="table-row__td">
                <div className="">
                  <p className="table-row__policy">{el.client.NomSociete}</p>
                </div>
              </td>
              <td data-column="PrixHT" className="table-row__td">
                <p className="table-row__p-status">{console.log(el.produits.produit)}</p>
              </td>
              <td data-column="TVA" className="table-row__td">
                {el.TVA}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        produitPerPage={commandePerPage}
        totalProduits={Commande.length}
        paginate={paginate}
      />
    </div>
  );
}
export default Main;
