import React from "react";
import "./Pagination.css"

function Pagination({produitPerPage, totalProduits,paginate}) {
  const pageNumbers=[];
  for (let i=1; i<=Math.ceil(totalProduits/produitPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
      <div className="pagination">
            <a href="#">&laquo;</a>
        {pageNumbers.map(number => (
              <a href="#" onClick={()=>paginate(number)}>{number}</a>
        ))}
          <a href="#">&raquo;</a>
      </div>
  );
}
export default Pagination;
